import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Styled from 'styled-components';
import { toggleIsCover } from '../../../state/modules/app';

import * as styles from './styles';

// component root class name
const CLASSNAME = 'CoverContent';

// declare types

interface ComponentProps {
  className?: string;
}
// tslint:disable-next-line: no-empty-interface
interface Props extends ComponentProps {
  children: React.ReactNode;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <div className="content">{props.children}</div>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleIsCover(true));
    return () => {
      dispatch(toggleIsCover(false));
    };
  }, [dispatch]);

  const props = {};

  return (
    <StyeldComponent {...componentProps} {...props}>
      {componentProps.children}
    </StyeldComponent>
  );
};
export default Container;
