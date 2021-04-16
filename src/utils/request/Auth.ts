import { axios_app } from 'utils/axios';

import { ResetPassInfo, SigninInfo, SignupInfo } from 'types';
import { Response, Signin, Signup } from 'types/ResponseData';

class Auth {
  static signin(signinInfo: SigninInfo): Promise<Response<Signin>> {
    return new Promise<Response<Signin>>((resolve, reject) => {
      axios_app()
        .post('/login', signinInfo)
        .then((result) => {
          if (result.data.data.token) {
            resolve(result.data);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static signup(signupInfo: SignupInfo): Promise<Response<Signup>> {
    return new Promise<Response<Signup>>((resolve, reject) => {
      axios_app()
        .post('/register', signupInfo)
        .then((result) => {
          resolve(result.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static sendResetPasswordMail(resetPassInfo: { email: string }): Promise<Response> {
    return new Promise<Response>((resolve, reject) => {
      axios_app()
        .post('/password/email', resetPassInfo)
        .then((result) => {
          resolve(result.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static resetPass(resetPassInfo: ResetPassInfo): Promise<Response> {
    return new Promise<Response>((resolve, reject) => {
      axios_app()
        .post(`/password/reset/${resetPassInfo.token}`, resetPassInfo)
        .then((result) => {
          resolve(result.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

export default Auth;
