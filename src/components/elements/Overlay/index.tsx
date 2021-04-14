import React, { useRef } from 'react';
import Styled from 'styled-components';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'Overlay';

// declare types

interface ComponentProps {
  childRef?: React.Ref<HTMLDivElement>;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

interface Props extends ComponentProps {
  ref?: React.Ref<HTMLDivElement>;
}

// dom component
const Component: React.FC<Props> = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    className={`${CLASSNAME} ${props.className}`}
    onClick={props.onClick}
  >
  </div>
));

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = componentProps => {

  const { childRef } = componentProps;

  return <StyeldComponent { ...componentProps } ref={childRef}></StyeldComponent>;
}
export default Container;