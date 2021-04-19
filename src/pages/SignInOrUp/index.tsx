import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import Styled from 'styled-components';
import {
  requestSignin,
  requestSignup,
  isSignupCompleteSelector,
  isSampleUserSelector,
} from 'state/modules/user';
import { setIsLoading } from 'state/modules/app';
import { SigninInfo, SignupInfo } from 'types';
import * as styles from './styles';
import Signin from 'pages/SignInOrUp/Signin';
import Signup from './Signup';
import CoverContent from 'components/modules/CoverContent';
import TabChanger from 'components/modules/TabChanger';
import Tab from 'components/modules/TabChanger/Tab';
import Tabs from 'components/modules/TabChanger/Tabs';
import TabContents from 'components/modules/TabChanger/TabContents';
import TabContent from 'components/modules/TabChanger/TabContent';
import TextButton from 'components/elements/buttons/TextButton';

// component root class name
const CLASSNAME = 'SignInOrUp';

// declare types
interface LocationState {
  isSampleUser: boolean;
}

interface ComponentProps {
  className?: string;
}

interface Props extends ComponentProps {
  isSampleUser: boolean;
  desideSigninInfo: (signinInfo: SigninInfo) => void;
  desideSignupInfo: (signupInfo: SignupInfo) => void;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <CoverContent>
      <TabChanger selected={0}>
        <Tab className="tab">
          <Tabs tabList={['Signin', 'Signup']} tabType={'simple'} />
        </Tab>
        <TabContents>
          <TabContent className="signin">
            <Signin deside={props.desideSigninInfo} isSampleUser={props.isSampleUser} />
          </TabContent>
          <TabContent>
            <Signup deside={props.desideSignupInfo} />
          </TabContent>
        </TabContents>
      </TabChanger>
      <div className="bottom">
        <TextButton link="/" types={['gray_midium', 's']}>
          サインインせずに使う
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
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation<LocationState>();
  const isGlobalSampleUser = useSelector(isSampleUserSelector);
  const [isLodalSampleUser, setIsLocalSampleUser] = useState<boolean>(false);
  const isSignupComplete = useSelector(isSignupCompleteSelector);

  const isSampleUser = isLodalSampleUser || isGlobalSampleUser;

  const desideSigninInfo = (signinInfo: SigninInfo) => {
    dispatch(setIsLoading(true));
    dispatch(requestSignin(signinInfo, isSampleUser));
  };

  const desideSignupInfo = (signupInfo: SignupInfo) => {
    dispatch(setIsLoading(true));
    dispatch(requestSignup(signupInfo));
  };

  const isSignupedCheck = useCallback(() => {
    if (isSignupComplete) {
      history.push('/signupComplete');
    }
  }, [isSignupComplete, history]);

  useEffect(() => {
    isSignupedCheck();
  }, [isSignupedCheck]);

  useEffect(() => {
    if (location.state && location.state.isSampleUser) {
      setIsLocalSampleUser(true);
    }
  }, [location]);

  const props = { isSampleUser, desideSigninInfo, desideSignupInfo };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
