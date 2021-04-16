import { Dispatch } from '@reduxjs/toolkit';
import { SigninInfo } from 'types';
import { RESPONSE_MESSAGES } from 'utils/messages';
import Auth from 'utils/request/Auth';
import { setUser } from 'state/modules/user';
import { setMessage, setIsLoading } from 'state/modules/app';

export const requestSignin = (signinInfo: SigninInfo) => async (
  dispatch: Dispatch
): Promise<void> => {
  try {
    const result = await Auth.signin(signinInfo);
    if (result.data) {
      localStorage.setItem('token', result.data.token);
      dispatch(
        setUser({
          id: result.data.user.id,
          name: result.data.user.name,
          icon_url: result.data.user.icon_url,
        })
      );
      dispatch(
        setMessage({
          isShow: true,
          type: 'success',
          message: RESPONSE_MESSAGES.success_signin,
        })
      );
    }
  } catch (error) {
    if (error.response) {
      if (error.response.status === 500) {
        dispatch(
          setMessage({
            isShow: true,
            type: 'error',
            message: RESPONSE_MESSAGES.error_internal_server_error,
          })
        );
      } else {
        dispatch(
          setMessage({
            isShow: true,
            type: 'error',
            message: RESPONSE_MESSAGES.fail_signin,
          })
        );
      }
    } else {
      dispatch(
        setMessage({
          isShow: true,
          type: 'error',
          message: RESPONSE_MESSAGES.error,
        })
      );
    }
  }
  dispatch(setIsLoading(false));
};
