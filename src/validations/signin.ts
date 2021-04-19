import vest, { test, enforce } from 'vest';
import isEmail from 'validator/es/lib/isEmail';
import { VALIDATE_ERROR_MESSAGES } from 'utils/messages';

import { SigninInfo } from 'types';

enforce.extend({ isEmail });

const suite = vest.create('signin', (signinInfo: SigninInfo) => {
  test('email', VALIDATE_ERROR_MESSAGES.email_required, () => {
    enforce(signinInfo.email).isNotEmpty().isEmail();
  });
  test('password', VALIDATE_ERROR_MESSAGES.password_shorter, () => {
    enforce(signinInfo.password).isNotEmpty().longerThanOrEquals(8);
  });
});

export default suite;
