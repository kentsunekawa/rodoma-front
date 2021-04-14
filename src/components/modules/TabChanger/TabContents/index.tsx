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

interface Props extends ComponentProps {}

// dom component
const Component: React.FC<Props> = ({ className, children }) => (
  <div className={`${CLASSNAME} ${className}`}>
    {children}
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = ({
  children,
  className = '',
}: ComponentProps) => {

  const { state } = useContext(TabChengerConext);

  const clones = children.map((child: React.ReactElement, i: number) => {
    return React.cloneElement(child, {
      isSelected: state.selected === i ? true : false,
      key: i,
    });
  });
  
  return <StyeldComponent {...{ clones, className }}>{clones}</StyeldComponent>;
}
export default Container;