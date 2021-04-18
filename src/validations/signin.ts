import vest, { test, enforce } from 'vest';
import isEmail from 'validator/es/lib/isEmail';

import { SigninInfo } from 'types';

enforce.extend({ isEmail });

const suite = vest.create('signin', (signinInfo: SigninInfo) => {
  test('email', 'メールアドレスを入力してください', () => {
    enforce(signinInfo.email).isNotEmpty().isEmail();
  });
  test('password', 'パスワードを8以上入力してください', () => {
    enforce(signinInfo.password).isNotEmpty().longerThanOrEquals(8);
  });
});

export default suite;
