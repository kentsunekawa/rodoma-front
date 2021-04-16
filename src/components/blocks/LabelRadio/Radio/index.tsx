import React from 'react';
import Styled from 'styled-components';

import { IconClose } from 'components/elements/icons';

import * as styles from './styles';

// component root class name
const CLASSNAME = 'Radio';

// declare types

interface ComponentProps {
  isChecked: boolean;
  value: string | number;
  name?: string;
  className?: string;
  onChange: (value: number) => void;
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
      type="radio"
      id={`${props.name}_${props.value}`}
      value={props.value}
      name={props.name}
      onChange={props.onChildChange}
    />
    {props.value === 0 ? (
      <label className="label -noSelect" htmlFor={`${props.name}_${props.value}`}>
        <IconClose />
      </label>
    ) : (
      <label className="label" htmlFor={`${props.name}_${props.value}`}></label>
    )}
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
  .label{
    &:before{
      border-color: ${({ theme, value }) => theme.colors.subjects[value]};
    }
    &:after{
      background: ${({ theme, value }) => theme.colors.subjects[value]};
    }
  }
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const { onChange } = componentProps;

  const onChildChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  const props = { onChildChange };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
