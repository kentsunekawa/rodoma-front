import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isSignupCompleteSelector, setIsSignupComplete } from 'state/modules/user';
import { redirectPathSelector, setRedirectPath } from 'state/modules/app';
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

interface Props extends ComponentProps {
  start: () => void;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <CoverContent>
      <Paragraph types={['center', 'bigTitle', 'primary']} className="title">
        Congratulations!
      </Paragraph>
      <Paragraph types={['center', 'text']} className="text">
        サインアップが完了しました。
        <br />
        確認メールが送信されましたのでメールに記載のボタンを押して、承認を完了してください。メールの有効期限は1時間です。
      </Paragraph>
      <div className="row -deside">
        <RoundButton types={['l', 'gradient']} className="button" onClick={props.start}>
          はじめる
        </RoundButton>
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
  const isSignupComplete = useSelector(isSignupCompleteSelector);
  const redirectToPath = useSelector(redirectPathSelector);

  const start = () => {
    dispatch(setRedirectPath(''));
    history.push(redirectToPath ? redirectToPath : '/');
  };

  useEffect(() => {
    if (isSignupComplete) {
      dispatch(setIsSignupComplete(false));
    } else {
      history.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const props = { start };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
