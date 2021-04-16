import React from 'react';
import { useSelector } from 'react-redux';
import { modeSelector } from 'state/modules/app';
import Styled from 'styled-components';
import * as styles from './styles';
import AppTheme from 'components/style/AppTheme';
import { Mode } from 'types';

// component root class name
const CLASSNAME = 'ColorLabelRadio';

// declare types
interface Value {
  label: number | string;
  color: 'primary' | 'white' | 'black' | 'gray_dark' | 'gray_light';
}

interface ComponentProps {
  name: string;
  selected: number | string;
  values: Value[];
  className?: string;
  onChange: (selected: string | number) => void;
}

interface Props extends ComponentProps {
  mode: Mode;
  onChildChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <ul className="list">
      {props.values.map((value, i) => {
        const bgColor = AppTheme[props.mode].colors[value.color];
        return (
          <li key={i} className="item">
            <input
              type="radio"
              id={`${props.name}_${i}`}
              value={value.label}
              checked={value.label === props.selected}
              onChange={props.onChildChange}
            />
            <label htmlFor={`${props.name}_${i}`} className="label">
              <span className="ring" style={{ border: `2px solid ${bgColor}` }}></span>
              <span className="circle" style={{ background: bgColor }}></span>
            </label>
          </li>
        );
      })}
    </ul>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const { selected, onChange } = componentProps;

  const mode = useSelector(modeSelector);

  const onChildChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof selected === 'number') {
      onChange(Number(e.target.value));
    } else {
      onChange(e.target.value);
    }
  };

  const props = { mode, onChildChange };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
