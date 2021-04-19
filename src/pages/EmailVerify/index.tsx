import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Styled from 'styled-components';
import axios from 'axios';

import { Response } from 'types/ResponseData';
import { getParam } from 'utils';
import { setIsLoading, setMessage } from 'state/modules/app';

import * as styles from './styles';
import { RESPONSE_MESSAGES } from 'utils/messages';

// component root class name
const CLASSNAME = 'EmailVerify';

// declare types

interface ComponentProps {
  className?: string;
}

// dom component
const Component: React.FC<ComponentProps> = (props: ComponentProps) => (
  <div className={`${CLASSNAME} ${props.className}`}></div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const verify = (url: string) => {
    return new Promise<Response>((resolve, reject) => {
      axios
        .get(url)
        .then((result) => {
          resolve(result.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const requestVerify = useCallback(
    async (url: string) => {
      try {
        const result = await verify(url);
        if (result.status === 'success_email_verify') {
          dispatch(setIsLoading(false));
          history.push('/signInOrUp');
          dispatch(
            setMessage({
              isShow: true,
              type: 'success',
              message: RESPONSE_MESSAGES.success_email_verify,
            })
          );
        }
      } catch (error) {
        dispatch(setIsLoading(false));
        history.push('/signInOrUp');
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
              message: RESPONSE_MESSAGES.fail_email_verify,
            })
          );
        }
      }
    },
    [dispatch, history]
  );

  useEffect(() => {
    const url = getParam('queryUrl', window.location.href);
    if (!url) {
      history.push('/signInOrUp');
    } else {
      dispatch(setIsLoading(true));
      requestVerify(url);
    }
    return () => {
      dispatch(setIsLoading(false));
    };
  }, [requestVerify, dispatch, history]);

  const props = {};

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
