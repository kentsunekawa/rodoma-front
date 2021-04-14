import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

interface Props extends ComponentProps {}

// dom component
const Component: React.FC<Props> = props => (
  <div className={`${CLASSNAME} ${props.className}`}>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = componentProps => {


  const dispatch = useDispatch();
  const history = useHistory();

  const verify = (url: string) => {
    console.log(url);
    return new Promise<Response>((resolve, reject) => {
      axios.get(url)
        .then(result => {
          resolve(result.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  const requestVerify = async (url: string) => {
    try{
      const result = await verify(url);
      if(result.status === 'success_email_verify') {
        dispatch(setIsLoading(false));
        history.push('/signInOrUp');
        dispatch(setMessage({
          isShow: true,
          type: 'success',
          message: RESPONSE_MESSAGES.success_email_verify,
        }));
      }
    } catch(error) {
      console.log(error.response);
      console.log(error.response.status);
      console.log(error.response.data.status);
      dispatch(setIsLoading(false));
      history.push('/');
      if(error.response.status === 500) {
        dispatch(setMessage({
          isShow: true,
          type: 'error',
          message: RESPONSE_MESSAGES.error_internal_server_error,
        }));
      } else if(error.response.data.status === 'fail_email_verify') {
        dispatch(setMessage({
          isShow: true,
          type: 'error',
          message: RESPONSE_MESSAGES.fail_email_verify,
        }));
      } else {
        dispatch(setMessage({
          isShow: true,
          type: 'error',
          message: RESPONSE_MESSAGES.error,
        }));
      }
    }
  }

  useEffect(() => {
    const url = getParam('queryUrl', window.location.href);
    dispatch(setIsLoading(true));
    if(!url) {
      history.push('/signInOrUp');
    } else {
      requestVerify(url);
    }
    return () => {
      dispatch(setIsLoading(false)); 
    }
  }, []);


  const props = {};

  return <StyeldComponent { ...componentProps } { ...props } ></StyeldComponent>;
}
export default Container;