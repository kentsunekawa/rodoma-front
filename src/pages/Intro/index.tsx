import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Styled from 'styled-components';
import CoverContent from 'components/modules/CoverContent';
import Logo from 'components/elements/Logo';
import Paragraph from 'components/elements/Paragraph';
import RoundButton from 'components/elements/buttons/RoundButton';

import * as styles from './styles';

// component root class name
const CLASSNAME = 'Intro';

// declare types
interface LocationState {
  isSampleUser: boolean;
}

interface ComponentProps {
  className?: string;
}

interface Props extends ComponentProps {
  isSampleUser: boolean;
  toSignin: () => void;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <CoverContent>
      <div className="inner">
        <div className="logo">
          <Logo type="gradient" />
        </div>
        <Paragraph types={['primary']} className="title">
          Welcome to rodoma.
        </Paragraph>
        <p className="description">
          サービスの説明が入りますサービスの説明が入りますサービスの説明が入りますサービスの説明が入りますサービスの説明が入りますサービスの説明が入ります
        </p>
        <div className="row">
          <RoundButton types={['l', 'gradient']} onClick={props.toSignin} className="nextButton">
            はじめる
          </RoundButton>
        </div>
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
  const location = useLocation<LocationState>();
  const history = useHistory();

  const [isSampleUser, setIsSampleUser] = useState<boolean>(false);

  const toSignin = () => {
    history.push({
      pathname: '/signInOrUp',
      state: {
        isSampleUser,
      },
    });
  };

  useEffect(() => {
    if (location.state) {
      setIsSampleUser(location.state.isSampleUser);
    }
  }, [location]);

  const props = { isSampleUser, toSignin };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
