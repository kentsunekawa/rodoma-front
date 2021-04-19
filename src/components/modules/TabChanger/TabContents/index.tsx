import React, { useContext } from 'react';
import Styled from 'styled-components';
import * as styles from './styles';
import { TabChengerConext } from '../index';

// component root class name
const CLASSNAME = 'TabContents';

// declare types
interface ComponentProps {
  children: React.ReactElement[];
  className?: string;
}

// dom component
const Component: React.FC<ComponentProps> = (props: ComponentProps) => (
  <div className={`${CLASSNAME} ${props.className}`}>{props.children}</div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const { children } = componentProps;

  const { state } = useContext(TabChengerConext);

  const clones = children.map((child: React.ReactElement, i: number) => {
    return React.cloneElement(child, {
      isSelected: state.selected === i ? true : false,
      key: i,
    });
  });

  return <StyeldComponent {...componentProps}>{clones}</StyeldComponent>;
};
export default Container;
