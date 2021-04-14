import vest, { test, enforce } from 'vest';
import isEmail from 'validator/es/lib/isEmail';

import { SigninInfo } from 'types';

enforce.extend({ isEmail });

const suite = vest.create('signin', (signinInfo: SigninInfo) => {
  test('email', 'メールアドレスは入力必須です', () => {
    enforce(signinInfo.email).isNotEmpty();
  });
  test('email', 'メールアドレスを入力してください', () => {
    enforce(signinInfo.email).isEmail();
  });

  test('password', 'パスワードは入力必須です', () => {
    enforce(signinInfo.password).isNotEmpty();
  });

  test('password', 'パスワード8以上入力してください', () => {
    enforce(signinInfo.password).longerThanOrEquals(8);
  });
  
});

export default suite;