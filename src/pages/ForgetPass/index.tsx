import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Styled from 'styled-components';
import { adjustErrorMessage } from 'utils';
import { RESPONSE_MESSAGES } from 'utils/messages';
import Auth from 'utils/request/Auth';
import { ValidateStatus } from 'types';
import { forgetPass as validate_forgetPass } from 'validations';
import {
  validateErrorStatusSelector,
  cleanupValidateErrorStatus,
  setIsLoading,
  setMessage,
} from 'state/modules/app';
import CoverContent from 'components/modules/CoverContent';
import RoundButton from 'components/elements/buttons/RoundButton';
import Error from 'components/elements/Error';
import TextInput from 'components/elements/inputs/TextInput';
import Paragraph from 'components/elements/Paragraph';
import TextButton from 'components/elements/buttons/TextButton';

import * as styles from './styles';

// component root class name
const CLASSNAME = 'ForgetPass';

// declare types

interface Errors {
  email: string[];
}

interface ComponentProps {
  className?: string;
}

interface Props extends ComponentProps {
  isMailSent: boolean;
  validateStatus: ValidateStatus<Errors>;
  email: string;
  setEmail: (email: string) => void;
  deside: () => void;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    {props.isMailSent ? (
      <CoverContent>
        <Paragraph types={['center', 'text']} className="text">
          パスワードリセット用のメールをお送りしました。
          <br />
          メール記載のボタンより
          <br />
          新パスワード設定ページへアクセスしてください。
          <br />
          （有効期限は1時間です）
        </Paragraph>
        <div className="row -deside">
          <RoundButton types={['gradient', 'l']} link="/" className="button">
            トップページへ
          </RoundButton>
        </div>
      </CoverContent>
    ) : (
      <CoverContent>
        <div className="main">
          <Paragraph types={['center', 'text']} className="text">
            パスワードリセット用のメールをお送りします。
            <br />
            ご登録のメールアドレスを ご入力ください。
          </Paragraph>
          <div className="row">
            <div className="input">
              <Error messages={props.validateStatus.errors.email}>
                <TextInput
                  required
                  type="text"
                  value={props.email}
                  label="Email"
                  name="email"
                  onChange={(e) => props.setEmail(e.target.value)}
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
          <TextButton link="/signInOrUp" types={['s', 'gray_midium']}>
            戻る
          </TextButton>
        </div>
      </CoverContent>
    )}
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const dispatch = useDispatch();

  const validateErrorStatus = useSelector(validateErrorStatusSelector);
  const [email, setEmail] = useState('');
  const [isMailSent, setIsMailSent] = useState(false);
  const [validateStatus, setValidateStatus] = useState<ValidateStatus<Errors>>({
    isInvalid: false,
    errors: {
      email: [],
    },
  });

  const deside = async () => {
    const validateResult = validate_forgetPass({
      email,
    });

    setValidateStatus({
      isInvalid: validateResult.hasErrors(),
      errors: {
        ...{
          email: [],
        },
        ...validateResult.getErrors(),
      },
    });
    if (!validateResult.hasErrors()) {
      dispatch(setIsLoading(true));

      try {
        await Auth.sendResetPasswordMail({ email });
        setIsMailSent(true);
        dispatch(setIsLoading(false));
      } catch (error) {
        switch (error.response.data.status) {
          case 'error_validation':
            setValidateStatus({
              isInvalid: false,
              errors: {
                email: [],
                ...adjustErrorMessage(error.response.data.data.errors),
              },
            });
            dispatch(setIsLoading(false));
            break;
          case 'error_wait_retrying':
            dispatch(
              setMessage({
                isShow: true,
                type: 'error',
                message: RESPONSE_MESSAGES.error_wait_retrying,
              })
            );
            dispatch(setIsLoading(false));
            break;
          case 'error_no_user_exists':
            setValidateStatus({
              isInvalid: false,
              errors: {
                email: [RESPONSE_MESSAGES.error_no_user_exists],
              },
            });
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
        }
      }
    }
  };

  useEffect(() => {
    if (
      validateErrorStatus.suiteName === 'forgetPass' &&
      validateErrorStatus.validateState.isInvalid
    ) {
      setValidateStatus({
        isInvalid: validateErrorStatus.validateState.isInvalid,
        errors: {
          ...{
            email: [],
          },
          ...validateErrorStatus.validateState.errors,
        },
      });
    }
  }, [validateErrorStatus]);

  useEffect(() => {
    return () => {
      dispatch(cleanupValidateErrorStatus());
    };
  }, [dispatch]);

  const props = { isMailSent, validateStatus, email, setEmail, deside };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
