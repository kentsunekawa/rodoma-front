import React from 'react';
import Styled from 'styled-components';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'TabContent';

// declare types
interface ComponentProps {
  children: React.ReactNode;
  isSelected?: boolean;
  className?: string;
}

interface Props extends ComponentProps {}

// dom component
const Component: React.FC<Props> = props => (
  <div className={`${CLASSNAME} ${props.className}`}>
    {props.children}
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = componentProps => {

  const { isSelected } = componentProps;

  return isSelected
    ? <StyeldComponent { ...componentProps }></StyeldComponent>
    : null;
}
export default Container;