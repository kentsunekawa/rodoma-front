import React from 'react';
import Styled from 'styled-components';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'ToggleTag';

// declare types
export interface ComponentProps {
  value: string;
  icon: React.ReactNode;
  className?: string;
  onClick?: (value: string) => void;
}

// dom component
const Component: React.FC<ComponentProps> = (props: ComponentProps) => (
  <button
    className={`${CLASSNAME} ${props.className}`}
    onClick={() => props.onClick && props.onClick(props.value)}
  >
    <div className="inner">{props.value}</div>
    {props.icon && <div className="icon">{props.icon}</div>}
  </button>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = ({
  value,
  icon,
  className = '',
  onClick,
}: ComponentProps) => {
  return <StyeldComponent {...{ className, value, icon, onClick }}></StyeldComponent>;
};
export default Container;
