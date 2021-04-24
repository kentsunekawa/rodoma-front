import React from 'react';
import Styled from 'styled-components';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'Tag';

// declare types
export type StyleType = 'primary' | 'gradient' | 'success' | 'error' | 'simple' | 's';

interface ComponentProps {
  maxLength?: number;
  className?: string;
  types?: StyleType[];
  value: string;
  icon?: React.ReactNode;
}

interface Props extends ComponentProps {
  text: string;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    {props.icon ? (
      <div className="inner -withIcon">
        <span className="icon">{props.icon}</span>
        <span className="text">{props.text}</span>
      </div>
    ) : (
      <div className="inner">
        <span className="text">{props.text}</span>
      </div>
    )}
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
  // extended styles
  ${({ types }) => types && types.map((type) => styles[type])}}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const { value, maxLength } = componentProps;

  const text = (() => {
    if (maxLength !== undefined) {
      if (value.length > maxLength) {
        return `${value.slice(0, maxLength)}…`;
      }
    }
    return value;
  })();

  const props = { text };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
