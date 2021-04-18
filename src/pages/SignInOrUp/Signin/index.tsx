import React, { useState } from 'react';
import Styled from 'styled-components';

import { ValidateStatus } from 'types';

import { signin as validate_signin } from 'validations';
import { SigninInfo } from 'types';

import * as styles from './styles';

import TextInput from 'components/elements/inputs/TextInput';
import RoundButton from 'components/elements/buttons/RoundButton';
import TextButton from 'components/elements/buttons/TextButton';
import Error from 'components/elements/Error';

// component root class name
const CLASSNAME = 'Signin';

// declare types

interface Errors {
  email: string[];
  password: string[];
}

interface ComponentProps {
  deside: (signinInfo: SigninInfo) => void;
  className?: string;
}

interface Props extends ComponentProps {
  validateStatus: ValidateStatus<Errors>;
  signinInfo: SigninInfo;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  desideSigninInfo: () => void;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <div className="row">
      <Error messages={props.validateStatus.errors.email}>
        <TextInput
          type="text"
          name="email"
          value={props.signinInfo.email}
          label="Email"
          onChange={props.change}
        />
      </Error>
    </div>
    <div className="row">
      <Error messages={props.validateStatus.errors.password}>
        <TextInput
          type="password"
          name="password"
          value={props.signinInfo.password}
          label="Password"
          onChange={props.change}
        />
      </Error>
    </div>
    <div className="row">
      <TextButton link="/forgetPass" types={['s', 'gray_midium']}>
        パスワードを忘れた方はこちら
      </TextButton>
    </div>
    <RoundButton
      onClick={props.desideSigninInfo}
      types={['l', 'gradient']}
      className="signinButton"
    >
      サインイン
    </RoundButton>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const { deside } = componentProps;

  const [validateStatus, setvalidateStatus] = useState<ValidateStatus<Errors>>({
    isInvalid: false,
    errors: {
      email: [],
      password: [],
    },
  });

  const [signinInfo, setSigninInfo] = useState<SigninInfo>({
    email: '',
    password: '',
  });

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSigninInfo({
      ...signinInfo,
      [e.target.name]: e.target.value,
    });
  };

  const desideSigninInfo = () => {
    const validateResult = validate_signin(signinInfo);

    setvalidateStatus({
      isInvalid: validateResult.hasErrors(),
      errors: {
        ...{
          email: [],
          password: [],
        },
        ...validateResult.getErrors(),
      },
    });

    if (!validateResult.hasErrors()) deside(signinInfo);
  };

  const props = { signinInfo, validateStatus, change, desideSigninInfo };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
