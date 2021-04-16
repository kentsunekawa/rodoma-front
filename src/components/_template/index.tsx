import React from 'react';
import Styled from 'styled-components';
import * as styles from './styles';

// component root class name
const CLASSNAME = '';

// declare types
type StyleType = 'primary';

interface ComponentProps {
  className?: string;
  types?: StyleType[];
}

interface Props extends ComponentProps {}

// dom component
const Component: React.FC<Props> = (props) => (
  <div className={`${CLASSNAME} ${props.className}`}></div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
  // extended styles
  ${({ types }) => types && types.map((type) => styles[type])}}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const props = {};

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
