import React from 'react';
import { useSelector } from 'react-redux';
import Styled from 'styled-components';
import { Mode } from 'types';
import { modeSelector } from 'state/modules/app';
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
  mode: Mode;
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
      border-color: ${({ theme, value, mode }) =>
        mode === 'light' ? theme.colors.subjects[value] : '#888'};
    }
    &:after{
      background: ${({ theme, value, mode }) => theme.colors.subjects[value]};
      ${({ mode }) => mode === 'dark' && `border: 1px solid #555;`}
    }
  }
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const { onChange } = componentProps;

  const mode = useSelector(modeSelector);

  const onChildChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  const props = { mode, onChildChange };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
