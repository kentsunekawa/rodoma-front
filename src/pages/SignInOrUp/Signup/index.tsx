import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Styled from 'styled-components';
import { SignupInfo, ValidateStatus } from 'types';

import { signup as validate_signup } from 'validations';
import { validateErrorStatusSelector, cleanupValidateErrorStatus } from 'state/modules/app';

import * as styles from './styles';

import TextInput from 'components/elements/inputs/TextInput';
import RoundButton from 'components/elements/buttons/RoundButton';
import Error from 'components/elements/Error';

// component root class name
const CLASSNAME = '';

// declare types

interface Errors {
  name: string[];
  email: string[];
  password: string[];
  password_confirmation: string[];
}

interface ComponentProps {
  className?: string;
  deside: (signupInfo: SignupInfo) => void;
}

interface Props extends ComponentProps {
  validateStatus: ValidateStatus<Errors>;
  signupInfo: SignupInfo;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  desideSignupInfo: () => void;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <div className="row">
      <Error messages={props.validateStatus.errors.name}>
        <TextInput
          type="text"
          value={props.signupInfo.name}
          label="Name"
          name="name"
          onChange={props.change}
        />
      </Error>
    </div>
    <div className="row">
      <Error messages={props.validateStatus.errors.email}>
        <TextInput
          type="text"
          value={props.signupInfo.email}
          label="Email"
          name="email"
          onChange={props.change}
        />
      </Error>
    </div>
    <div className="row">
      <Error messages={props.validateStatus.errors.password}>
        <TextInput
          type="password"
          value={props.signupInfo.password}
          label="Password"
          name="password"
          onChange={props.change}
        />
      </Error>
    </div>
    <div className="row">
      <Error messages={props.validateStatus.errors.password_confirmation}>
        <TextInput
          type="password"
          value={props.signupInfo.password_confirmation}
          label="Password Confirmation"
          name="password_confirmation"
          onChange={props.change}
        />
      </Error>
    </div>
    <RoundButton
      types={['l', 'gradient']}
      className="signupButton"
      onClick={props.desideSignupInfo}
    >
      Signup
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

  const dispatch = useDispatch();
  const validateErrorStatus = useSelector(validateErrorStatusSelector);

  const [validateStatus, setvalidateStatus] = useState<ValidateStatus<Errors>>({
    isInvalid: false,
    errors: {
      name: [],
      email: [],
      password: [],
      password_confirmation: [],
    },
  });

  const [signupInfo, setSignupInfo] = useState<SignupInfo>({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  useEffect(() => {
    if (validateErrorStatus.suiteName === 'signup' && validateErrorStatus.validateState.isInvalid) {
      setvalidateStatus({
        isInvalid: validateErrorStatus.validateState.isInvalid,
        errors: {
          ...{
            name: [],
            email: [],
            password: [],
            password_confirmation: [],
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

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupInfo({
      ...signupInfo,
      [e.target.name]: e.target.value,
    });
  };

  const desideSignupInfo = () => {
    const validateResult = validate_signup(signupInfo);

    setvalidateStatus({
      isInvalid: validateResult.hasErrors(),
      errors: {
        ...{
          name: [],
          email: [],
          password: [],
          password_confirmation: [],
        },
        ...validateResult.getErrors(),
      },
    });

    if (!validateResult.hasErrors()) deside(signupInfo);
  };

  const props = { validateStatus, signupInfo, change, desideSignupInfo };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
