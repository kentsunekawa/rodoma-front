import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

  const props = {};

  return <StyeldComponent { ...componentProps } { ...props } ></StyeldComponent>;
}
export default Container;