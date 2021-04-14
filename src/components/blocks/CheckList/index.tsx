import React from 'react';
import Styled from 'styled-components';
import * as styles from './styles';
import CheckBox, { StyleType } from 'components/blocks/CheckList/CheckBox';

// component root class name
const CLASSNAME = 'CheckList';

interface CheckListValues {
  value: string | number;
  label: string;
};

interface ComponentProps {
  name: string;
  values: CheckListValues[];
  selected: (number | string)[],
  boxTypes?: StyleType[];
  className?: string;
  onChange: (values: (string | number)[]) => void;
}

interface Props extends ComponentProps {
  checkBoxes: React.ReactNode;
}

// dom component
const Component: React.FC<Props> = props => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <ul className='list'>
      {props.checkBoxes}
    </ul>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = componentPrps => {

  const { name, values, boxTypes, selected, onChange } = componentPrps;

  const onChildChange = (value: string | number) => {
    let newSelected = selected.slice();
    if(newSelected.includes(value)){
      newSelected.splice(newSelected.indexOf(value), 1);
    } else {
      newSelected.push(value);
    } 
    onChange(newSelected); 
  }

  const checkBoxes = values.map((value, i) => {
    return <li className="item" key={i}>
      <CheckBox
        isChecked={selected.includes(value.value)}
        value={value.value}
        label={value.label}
        name={name}
        types={boxTypes}
        onChange={onChildChange}
      />
    </li>
  });

  const props = { checkBoxes };

  return <StyeldComponent { ...componentPrps } { ...props }></StyeldComponent>;
}
export default Container;