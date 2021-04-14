import { Dispatch } from '@reduxjs/toolkit';
import { SignupInfo } from 'types';
import { RESPONSE_MESSAGES } from 'utils/messages';
import { adjustErrorMessage } from 'utils';
import Auth from 'utils/request/Auth';
import { setUser, setIsSignupComplete } from 'state/modules/user';
import { setMessage, setIsLoading, setValidateErrorStatus } from 'state/modules/app';

export const requestSignup = (signupInfo: SignupInfo) => async (dispatch: Dispatch) => {  
  try{
    const result = await Auth.signup(signupInfo);
    dispatch(setIsSignupComplete(true));
    dispatch(setUser({
      id: result.data!.user.id,
      name: result.data!.user.name,
      icon_url: result.data!.user.icon_url,
    }));
    // メール送信完了画面表示
  } catch(error) {
    if(error.response) {
      if(error.response.data.status === 'error_validation') {        
        dispatch(setValidateErrorStatus({
          suiteName: 'signup',
          validateState: {
            isInvalid: true,
            errors: {
              ...adjustErrorMessage(error.response.data.data.errors)
            },
          }
        }));
      }
    } else {
      dispatch(setMessage({
        isShow: true,
        type: 'error',
        message: RESPONSE_MESSAGES.error,
      }));
    }
  }
  dispatch(setIsLoading(false));

}