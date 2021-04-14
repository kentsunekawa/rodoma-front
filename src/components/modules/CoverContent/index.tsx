import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Styled from 'styled-components';

import { toggleIsCover, isCoverSelector } from '../../../state/modules/app';

import * as styles from './styles';

// component root class name
const CLASSNAME = 'CoverContent';

// declare types

interface ComponentProps {
  className?: string;
}

interface Props extends ComponentProps {}

// dom component
const Component: React.FC<Props> = props => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <div className='content'>
      {props.children}
    </div>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = componentProps => {

  const dispatch = useDispatch();
  const isCover = useSelector(isCoverSelector);

  useEffect(() => {
    dispatch(toggleIsCover(true));
    return () => {
      dispatch(toggleIsCover(false));
    }
  }, [])

  const props = {};

  return <StyeldComponent { ...componentProps } { ...props } ></StyeldComponent>;
}
export default Container;