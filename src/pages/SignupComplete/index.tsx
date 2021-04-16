import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isSignupCompleteSelector, setIsSignupComplete } from 'state/modules/user';
import Styled from 'styled-components';

import * as styles from './styles';

import CoverContent from 'components/modules/CoverContent';
import RoundButton from 'components/elements/buttons/RoundButton';
import Paragraph from 'components/elements/Paragraph';
import { useHistory } from 'react-router';

// component root class name
const CLASSNAME = 'SignupComplete';

// declare types

interface ComponentProps {
  className?: string;
}

// dom component
const Component: React.FC<ComponentProps> = (props: ComponentProps) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <CoverContent>
      <Paragraph types={['center', 'bigTitle', 'primary', 'bold']} className="title">
        Congratulations!!
      </Paragraph>
      <Paragraph types={['center', 'subTitle']}>
        サインアップが完了しました。
        <br />
        確認メールが送信されましたので
        <br />
        メールに記載のボタンを押して、
        <br />
        承認を完了してください。
        <br />
        メールの有効期限は1時間です。
      </Paragraph>
      <RoundButton link="/" types={['l', 'gradient']}>
        OK
      </RoundButton>
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
  const isSignupComplete = useSelector(isSignupCompleteSelector);

  useEffect(() => {
    if (isSignupComplete) {
      dispatch(setIsSignupComplete(false));
    } else {
      history.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <StyeldComponent {...componentProps}></StyeldComponent>;
};
export default Container;
