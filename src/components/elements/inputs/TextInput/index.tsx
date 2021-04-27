import React, { useState, useRef } from 'react';
import Styled from 'styled-components';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'TextInput';

// declare types
type StyleType = 's';

export interface ComponentProps {
  required?: boolean;
  type?: 'text' | 'password';
  value: string | number;
  label?: string;
  name?: string;
  placeholder?: string;
  className?: string;
  types?: StyleType[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

interface Props extends ComponentProps {
  dom: {
    input: React.Ref<HTMLInputElement>;
  };
  isFocus: boolean;
  isInputed: boolean;
  labelClick: () => void;
  onChildChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChildFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChildBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div
    className={`${CLASSNAME} ${props.className} ${
      props.isInputed || props.isFocus ? '-inputed' : ''
    }`}
  >
    <div className="inner">
      <input
        ref={props.dom.input}
        type={props.type}
        name={props.name}
        className="input"
        value={props.value}
        placeholder={props.placeholder && props.placeholder}
        onFocus={props.onChildFocus}
        onChange={props.onChildChange}
        onBlur={props.onChildBlur}
      />
    </div>
    {props.label && (
      <span className="label" onClick={props.labelClick}>
        {props.label}
        {props.required && <sup>*</sup>}
      </span>
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
  const { value, onChange, onBlur } = componentProps;

  const [isInputed, setIsInputed] = useState(value ? true : false);
  const [isFocus, setIsFocus] = useState(false);

  const dom = {
    input: useRef<HTMLInputElement>(null),
  };

  const onChildChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsInputed(e.target.value !== '' ? true : false);
    onChange && onChange(e);
  };

  const onChildFocus = () => {
    setIsFocus(true);
  };

  const onChildBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocus(false);
    setIsInputed(e.target.value !== '' ? true : false);
    onBlur && onBlur(e);
  };

  const labelClick = () => {
    if (!isFocus) {
      setIsFocus(true);
      if (dom.input.current) {
        dom.input.current.focus();
      }
    }
  };

  const props = {
    dom,
    isInputed,
    isFocus,
    labelClick,
    onChildChange,
    onChildBlur,
    onChildFocus,
  };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
