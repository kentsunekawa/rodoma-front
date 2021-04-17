import React from 'react';
import Styled from 'styled-components';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'Paragraph';

// declare types
type StyleType =
  | 'inline'
  | 'caption'
  | 'smallCaption'
  | 'bigTitle'
  | 'title'
  | 'subTitle'
  | 'bold'
  | 'text'
  | 'alignLeft'
  | 'alignRight'
  | 'center'
  | 'primary'
  | 'nega';

interface ComponentProps {
  children: React.ReactNode;
  className?: string;
  types?: StyleType[];
}

// dom component
const Component: React.FC<ComponentProps> = (props: ComponentProps) => (
  <p className={`${CLASSNAME} ${props.className}`}>{props.children}</p>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
  // extended styles
  ${({ types }) => types && types.map((type) => styles[type])}}
`;

// container component
const Container: React.FC<ComponentProps> = (ComponentProps) => {
  return <StyeldComponent {...ComponentProps}></StyeldComponent>;
};
export default Container;
