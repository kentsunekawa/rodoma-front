import React, { useState, useRef, useEffect } from 'react';
import Styled from 'styled-components';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'TextArea';

// declare types
type StyleType = 's' | 'noBorder';

interface ComponentProps {
  height?: number;
  value: string;
  label?: string;
  name?: string;
  placeholder? : string;
  className?: string;
  types?: StyleType[];
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}

interface Props extends ComponentProps {
  dom: {
    input: React.Ref<HTMLTextAreaElement>;
  };
  isFocus: boolean;
  isInputed: boolean;
  labelClick: () => void;
  onChildChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onChildFocus: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onChildBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}

// dom component
const Component: React.FC<Props> = props => (
  <div className={`${CLASSNAME} ${props.className} ${props.isInputed || props.isFocus ? '-inputed' : ''}`}>
    <div className="inner">
      <textarea
        ref={props.dom.input}
        name={props.name}
        value={props.value}
        className="textarea"
        placeholder={props.placeholder && props.placeholder}
        onFocus={props.onChildFocus}
        onChange={props.onChildChange}
        onBlur={props.onChildBlur}>
      </textarea>
    </div>
    {props.label && <span className="label" onClick={props.labelClick}>{props.label}</span>}
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
  & > .inner{
    height: ${({height}) => height ? `${height}px` : '200px'};
  }
  // extended styles
  ${({types}) => types && types.map(type => styles[type])}}
`;

// container component
const Container: React.FC<ComponentProps> = componentProps => {

  const { value, onChange, onBlur } = componentProps;

  const [isInputed, setIsInputed] = useState(value ? true : false);
  const [isFocus, setIsFocus] = useState(false);

  const dom = {
    input: useRef<HTMLTextAreaElement>(null),
  };

  const onChildChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIsInputed(e.target.value !== '' ? true : false);
    onChange && onChange(e);
  }

  const onChildFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {    
    setIsFocus(true);
  }

  const onChildBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocus(false);
    setIsInputed(e.target.value !== '' ? true : false);
    onBlur && onBlur(e);
  }

  const labelClick = () => {
    if(!isFocus) {
      setIsFocus(true);
      if(dom.input.current){
        dom.input.current.focus();
      }
    }
  }

  useEffect(() => {
    setIsFocus(value ? true : false);
  }, [value]);

  const props = {
    dom,
    isFocus,
    isInputed,
    labelClick,
    onChildChange,
    onChildBlur,
    onChildFocus
  };

  return <StyeldComponent { ...componentProps } { ...props }></StyeldComponent>;
}
export default Container;