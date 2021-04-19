import React from 'react';
import Styled from 'styled-components';

import CoverContent from 'components/modules/CoverContent';
import Logo from 'components/elements/Logo';
import Paragraph from 'components/elements/Paragraph';
import TextButton from 'components/elements/buttons/TextButton';
import RoundButton from 'components/elements/buttons/RoundButton';

import * as styles from './styles';

// component root class name
const CLASSNAME = 'Intro';

// declare types

interface ComponentProps {
  className?: string;
}

// dom component
const Component: React.FC<ComponentProps> = (props: ComponentProps) => (
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
          <RoundButton types={['l', 'gradient']} link="/signInOrUp" className="nextButton">
            サインインする
          </RoundButton>
        </div>
        <div className="row">
          <TextButton link="/" types={['s']}>
            サインインせずに使う
          </TextButton>
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
  return <StyeldComponent {...componentProps}></StyeldComponent>;
};
export default Container;
