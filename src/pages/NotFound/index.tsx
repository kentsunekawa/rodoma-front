import React from 'react';
import Styled from 'styled-components';

import PageBase from 'components/layouts/PageBase';
import Paragraph from 'components/elements/Paragraph';
import RoundButton from 'components/elements/buttons/RoundButton';

import * as styles from './styles';

// component root class name
const CLASSNAME = 'NotFound';

// declare types

interface ComponentProps {
  className?: string;
}

// dom component
const Component: React.FC<ComponentProps> = (props: ComponentProps) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <PageBase>
      <Paragraph types={['bigTitle', 'center', 'primary']}>Oops!</Paragraph>
      <Paragraph types={['title', 'center', 'primary']}>Page not found</Paragraph>
      <RoundButton types={['gradient', 'l']} className="link" link="/">
        トップへ
      </RoundButton>
    </PageBase>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const props = {};

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
