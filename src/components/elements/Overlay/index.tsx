import React, { forwardRef } from 'react';
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
  children: React.ReactNode;
  ref?: React.Ref<HTMLDivElement>;
}

// dom component
const Component: React.FC<Props> = forwardRef(function Child(props: Props, ref) {
  return (
    <div ref={ref} className={`${CLASSNAME} ${props.className}`} onClick={props.onClick}></div>
  );
});

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const { childRef } = componentProps;

  return (
    <StyeldComponent {...componentProps} ref={childRef}>
      {componentProps.children}
    </StyeldComponent>
  );
};
export default Container;
