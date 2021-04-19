import React from 'react';
import Styled from 'styled-components';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'PageBase';

// declare types

interface ComponentProps {
  children: React.ReactNode;
  className?: string;
}

// dom component
const Component: React.FC<ComponentProps> = (props: ComponentProps) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <div className="inner">{props.children}</div>
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
