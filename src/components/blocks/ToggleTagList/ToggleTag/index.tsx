import React from 'react';
import Styled from 'styled-components';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'ToggleTag';

// declare types
interface ComponentProps {
  value: string;
  icon: React.ReactNode;
  className?: string;
  onClick?: (value: string) => void;
}

interface Props extends ComponentProps {}

// dom component
const Component: React.FC<Props> = ({ className, value, icon, onClick }) => (
  <button className={`${CLASSNAME} ${className}`} onClick={() => onClick && onClick(value)}>
    <div className="inner">{value}</div>
    {icon && (
      <div className="icon">
        {icon}
      </div>
    )}
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
  return <StyeldComponent {...{className, value, icon, onClick}}></StyeldComponent>;
}
export default Container;