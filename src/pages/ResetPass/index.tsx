import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Styled from 'styled-components';
import { RESPONSE_MESSAGES } from 'utils/messages';
import Auth from 'utils/request/Auth';
import { getParam, adjustErrorMessage } from 'utils';
import { setIsLoading, setMessage } from 'state/modules/app';
import { ValidateStatus, ResetPassInfo } from 'types';
import { resetPass as validate_resetPass } from 'validations';
import CoverContent from 'components/modules/CoverContent';
import RoundButton from 'components/elements/buttons/RoundButton';
import Error from 'components/elements/Error';
import TextInput from 'components/elements/inputs/TextInput';
import Paragraph from 'components/elements/Paragraph';
import TextButton from 'components/elements/buttons/TextButton';

import * as styles from './styles';

// component root class name
const CLASSNAME = '';

// declare types
type Errors = {
  email: string[];
  password: string[];
  password_confirmation: string[];
};

interface ComponentProps {
  className?: string;
}

interface Props extends ComponentProps {
  resetPassInfo: ResetPassInfo;
  validateStatus: ValidateStatus<Errors>;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  deside: () => void;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <CoverContent>
      <div className="main">
        <div className="row">
          <Paragraph types={['center', 'text']} className="text">
            登録済のメールアドレスと、
            <br />
            ご希望の新しいパスワードを
            <br />
            ご入力ください。
          </Paragraph>
        </div>
        <div className="row">
          <div className="input">
            <Error messages={props.validateStatus.errors.email}>
              <TextInput
                required
                type="text"
                value={props.resetPassInfo.email}
                label="Email"
                name="email"
                onChange={props.change}
              />
            </Error>
          </div>
        </div>
        <div className="row">
          <div className="input">
            <Error messages={props.validateStatus.errors.password}>
              <TextInput
                required
                type="password"
                value={props.resetPassInfo.password}
                label="Password"
                name="password"
                onChange={props.change}
              />
            </Error>
          </div>
        </div>
        <div className="row">
          <div className="input">
            <Error messages={props.validateStatus.errors.password_confirmation}>
              <TextInput
                required
                type="password"
                value={props.resetPassInfo.password_confirmation}
                label="Password Confirmation"
                name="password_confirmation"
                onChange={props.change}
              />
            </Error>
          </div>
        </div>
        <div className="row -deside">
          <RoundButton types={['gradient', 'l']} onClick={props.deside} className="button">
            送信
          </RoundButton>
        </div>
      </div>
      <div className="bottom">
        <TextButton link="/signInOrUp" types={['gray_midium', 's']}>
          サインインページへ戻る
        </TextButton>
      </div>
    </CoverContent>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [resetPassInfo, setResetPassInfo] = useState<ResetPassInfo>({
    token: getParam('token', window.location.href),
    email: '',
    password: '',
    password_confirmation: '',
  });

  const [validateStatus, setValidateStatus] = useState<ValidateStatus<Errors>>({
    isInvalid: false,
    errors: {
      email: [],
      password: [],
      password_confirmation: [],
    },
  });

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResetPassInfo({
      ...resetPassInfo,
      [e.target.name]: e.target.value,
    });
  };

  const deside = async () => {
    const validateResult = validate_resetPass(resetPassInfo);

    setValidateStatus({
      isInvalid: validateResult.hasErrors(),
      errors: {
        ...{
          email: [],
          password: [],
          password_confirmation: [],
        },
        ...validateResult.getErrors(),
      },
    });

    if (!validateResult.hasErrors()) {
      dispatch(setIsLoading(true));
      try {
        const result = await Auth.resetPass(resetPassInfo);
        dispatch(
          setMessage({
            isShow: true,
            type: 'success',
            message: RESPONSE_MESSAGES[result.status],
          })
        );
        dispatch(setIsLoading(false));
        history.push('/signInOrUp');
      } catch (error) {
        switch (error.response.data.status) {
          case 'error_validation':
            setValidateStatus({
              isInvalid: false,
              errors: {
                email: [],
                password: [],
                password_confirmation: [],
                ...adjustErrorMessage(error.response.data.data.errors),
              },
            });
            dispatch(setIsLoading(false));
            break;
          case 'error_reset_token_invalid':
            dispatch(
              setMessage({
                isShow: true,
                type: 'error',
                message: RESPONSE_MESSAGES.error_reset_token_invalid,
              })
            );
            dispatch(setIsLoading(false));
            break;
          default:
            dispatch(
              setMessage({
                isShow: true,
                type: 'error',
                message: RESPONSE_MESSAGES.error,
              })
            );
            dispatch(setIsLoading(false));
        }
      }
    }
  };

  useEffect(() => {
    if (!resetPassInfo.token) {
      history.push('/signInOrUp');
    }
  }, [resetPassInfo, history]);

  const props = { resetPassInfo, validateStatus, change, deside };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
