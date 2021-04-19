import vest, { test, enforce } from 'vest';
import isEmail from 'validator/es/lib/isEmail';
import { VALIDATE_ERROR_MESSAGES } from 'utils/messages';

enforce.extend({ isEmail });

const suite = vest.create('signup', (forgetPassInfo: { email: string }) => {
  test('email', VALIDATE_ERROR_MESSAGES.email_required, () => {
    enforce(forgetPassInfo.email).isNotEmpty().isEmail();
  });
});

export default suite;
