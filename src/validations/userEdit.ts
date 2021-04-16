import vest, { test, enforce } from 'vest';
import isEmail from 'validator/es/lib/isEmail';
import { VALIDATE_ERROR_MESSAGES } from 'utils/messages';

import { UserData } from 'types';

enforce.extend({ isEmail });

const suite = vest.create('userEdit', (userData: UserData) => {
  test('name', VALIDATE_ERROR_MESSAGES.name_required, () => {
    enforce(userData.name).isNotEmpty();
  });

  test('name', VALIDATE_ERROR_MESSAGES.name_over, () => {
    enforce(userData.name).shorterThanOrEquals(30);
  });

  test('email', VALIDATE_ERROR_MESSAGES.email_required, () => {
    enforce(userData.email).isNotEmpty();
  });
  test('email', VALIDATE_ERROR_MESSAGES.email_required, () => {
    enforce(userData.email).isEmail();
  });

  test('sns', VALIDATE_ERROR_MESSAGES.url_required, () => {
    for (let i = 0; i < userData.profile.sns.length; i++) {
      if (userData.profile.sns[i].url === '') {
        return false;
      }
    }
  });
});

export default suite;
