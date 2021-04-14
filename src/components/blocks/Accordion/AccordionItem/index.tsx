import React from 'react';
import Styled from 'styled-components';
import * as styles from './styles';

// component root class name
const CLASSNAME = '';

// declare types
interface ComponentProps {
  className?: string;
}

interface Props extends ComponentProps {}

// dom component
const Component: React.FC<Props> = props => (
  <div className={`${CLASSNAME} ${props.className}`}>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = componentProps => {
  return <StyeldComponent { ...componentProps }></StyeldComponent>;
}
export default Container;