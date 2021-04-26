import React from 'react';
import Styled from 'styled-components';

import { IconLoading } from 'components/elements/icons';

import * as styles from './styles';

// component root class name
const CLASSNAME = 'LoadingBlock';

// declare types

export interface ComponentProps {
  className?: string;
}

// dom component
const Component: React.FC<ComponentProps> = (props: ComponentProps) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <IconLoading />
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
