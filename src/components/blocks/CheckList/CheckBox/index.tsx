import React from 'react';
import Styled from 'styled-components';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'CheckBox';

// declare types
export type StyleType = 'nega' | 'outline';

export interface ComponentProps {
  isChecked: boolean;
  value: string | number;
  label: string;
  name?: string;
  className?: string;
  types?: StyleType[];
  onChange: (value: string | number) => void;
}

interface Props extends ComponentProps {
  onChildChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <input
      checked={props.isChecked}
      className="input"
      type="checkbox"
      id={`${props.name}_${props.value}`}
      value={props.value}
      name={props.name}
      onChange={props.onChildChange}
    />
    <label className="label" htmlFor={`${props.name}_${props.value}`}>
      <div className="icon" />
      <span className="text">{props.label}</span>
    </label>
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
  const { value, onChange } = componentProps;

  const onChildChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof value === 'number') {
      onChange(Number(e.target.value));
    } else {
      onChange(e.target.value);
    }
  };

  const props = { onChildChange };

  return <StyeldComponent {...componentProps} {...props} />;
};
export default Container;
