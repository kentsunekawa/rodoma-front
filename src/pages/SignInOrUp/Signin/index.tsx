import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Styled from 'styled-components';
import { ValidateStatus } from 'types';
import { signin as validate_signin } from 'validations';
import { SigninInfo } from 'types';
import { sampleUserDataSelector } from 'state/modules/user';
import TextInput from 'components/elements/inputs/TextInput';
import RoundButton from 'components/elements/buttons/RoundButton';
import TextButton from 'components/elements/buttons/TextButton';
import Error from 'components/elements/Error';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'Signin';

// declare types

interface Errors {
  email: string[];
  password: string[];
}

interface ComponentProps {
  isSampleUser: boolean;
  className?: string;
  deside: (signinInfo: SigninInfo) => void;
}

interface Props extends ComponentProps {
  validateStatus: ValidateStatus<Errors>;
  signinInfo: SigninInfo;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  desideSigninInfo: () => void;
  signinAsSampleUser: () => void;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <div className="row">
      <div className="input">
        <Error messages={props.validateStatus.errors.email}>
          <TextInput
            required
            type="text"
            name="email"
            value={props.signinInfo.email}
            label="Email"
            onChange={props.change}
            className="input"
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
            name="password"
            value={props.signinInfo.password}
            label="Password"
            onChange={props.change}
            className="input"
          />
        </Error>
      </div>
    </div>
    <div className="row -forget">
      <TextButton link="/forgetPass" types={['s', 'primary']}>
        パスワードを忘れた方はこちら
      </TextButton>
    </div>
    <div className="row">
      <RoundButton onClick={props.desideSigninInfo} types={['l', 'gradient']} className="button">
        サインイン
      </RoundButton>
    </div>
    {props.isSampleUser && (
      <div className="row">
        <RoundButton
          types={['gradient', 'm']}
          onClick={props.signinAsSampleUser}
          className="button"
        >
          サンプルユーザーとしてサインインする
        </RoundButton>
      </div>
    )}
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const sampleUserData = useSelector(sampleUserDataSelector);
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

  const signinAsSampleUser = () => {
    deside(sampleUserData);
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

  const props = { signinInfo, validateStatus, change, desideSigninInfo, signinAsSampleUser };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
