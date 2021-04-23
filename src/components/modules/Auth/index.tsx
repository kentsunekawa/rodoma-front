import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { UserData_overview } from 'types';
import { setIsVisited, setUser, setInitCheckStatus } from 'state/modules/user';
import { getParam } from 'utils';
import Auth from 'utils/request/Auth';
import { RESPONSE_MESSAGES } from 'utils/messages';
import { setMessage, setMode } from 'state/modules/app';

interface Props {
  children: React.ReactNode;
}

// container component
const Container: React.FC<Props> = (props: Props) => {
  const noCheckPaths = ['/resetPass', '/emailVerify', '/about'];

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const isMounted = useRef<boolean>(false);

  const redirectToSignin = () => {
    dispatch(setInitCheckStatus(true));
    history.push('/signInOrUp');
  };

  const successSignin = (user: UserData_overview) => {
    dispatch(setUser(user));
    dispatch(setInitCheckStatus(true));
  };

  const modeCheck = () => {
    const mode = localStorage.getItem('mode');
    if (mode === 'dark') {
      dispatch(setMode(mode));
    }
  };

  const getUserByToken = async () => {
    try {
      const result = await Auth.getUserByToken();
      if (result.status === 'success_signin' && result.data) {
        successSignin(result.data.user);
      } else {
        dispatch(
          setMessage({
            isShow: true,
            type: 'error',
            message: RESPONSE_MESSAGES.error,
          })
        );
        redirectToSignin();
      }
    } catch (error) {
      redirectToSignin();
    }
  };

  const signin = async () => {
    try {
      const result = await Auth.refreshToken();
      if (result.status === 'success_signin' && result.data) {
        localStorage.setItem('token', result.data.token);
        if (result.data.user) {
          successSignin(result.data.user);
        } else {
          getUserByToken();
        }
      } else {
        redirectToSignin();
      }
    } catch (error) {
      redirectToSignin();
    }
  };

  const initCheck = () => {
    modeCheck();
    const isVisited = Boolean(localStorage.getItem('isVisited'));
    const isSampleUser = getParam('isSampleUser', window.location.href) !== null;
    if (isVisited) {
      dispatch(setIsVisited(true));
      if (isSampleUser) {
        dispatch(setInitCheckStatus(true));
        history.push({
          pathname: '/signInOrUp',
          state: {
            isSampleUser: true,
          },
        });
      } else {
        if (localStorage.getItem('token')) {
          signin();
        } else {
          dispatch(setInitCheckStatus(true));
        }
      }
    } else {
      localStorage.setItem('isVisited', '1');
      dispatch(setIsVisited(false));
      setTimeout(() => {
        dispatch(setInitCheckStatus(true));
      }, 1500);
      if (isSampleUser) {
        history.push({
          pathname: '/Intro',
          state: {
            isSampleUser: true,
          },
        });
      } else {
        history.push('/intro');
      }
    }
  };

  useEffect(() => {
    if (!isMounted.current) {
      if (!noCheckPaths.includes(location.pathname)) {
        initCheck();
      } else {
        dispatch(setInitCheckStatus(true));
      }
    }
    isMounted.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, history]);

  return <>{props.children}</>;
};
export default Container;
