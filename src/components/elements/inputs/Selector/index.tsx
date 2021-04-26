import React, { useState } from 'react';
import Styled from 'styled-components';
import { isSelectedExist } from 'utils';
import * as styles from './styles';
import IconDown from 'components/elements/icons/IconDown';

// component root class name
const CLASSNAME = 'Selector';

// declare types
type StyleType = 'l' | 's' | 'primary';
interface Option {
  value: string | number;
  label: string;
}

export interface ComponentProps {
  label?: string | undefined;
  name?: string;
  options: Option[];
  selected?: string | number;
  types?: StyleType[];
  className?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface Props extends ComponentProps {
  isSelected: boolean;
  onSelectedFunc: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

// dom componentss
const Component: React.FC<Props> = (props: Props) => (
  <div
    className={`${CLASSNAME} ${props.className} ${
      props.isSelected || !props.disabled ? '-selected' : ''
    } ${props.disabled ? '-disabled' : ''}`}
  >
    <select
      className="select"
      onChange={props.onSelectedFunc}
      value={props.selected}
      name={props.name}
      disabled={props.disabled}
    >
      {props.options.map((option, i) => {
        return (
          <option value={option.value} key={i}>
            {option.label}
          </option>
        );
      })}
    </select>
    {props.label && <span className="label">{props.label}</span>}
    <div className="icon">
      <IconDown />
    </div>
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
  const { selected, options, onChange } = componentProps;

  const [isSelected, setIsSelected] = useState(() => isSelectedExist(selected, options));

  const onSelectedFunc = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsSelected(e.target.value ? true : false);
    onChange && onChange(e);
  };

  const props = { isSelected, onSelectedFunc };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};

export default Container;
