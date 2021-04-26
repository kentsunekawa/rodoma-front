import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import * as styles from './styles';
import CheckBox, { StyleType } from 'components/blocks/CheckList/CheckBox';

// component root class name
const CLASSNAME = 'CheckList';

interface CheckListValues {
  value: string | number;
  label: string;
}

export interface ComponentProps {
  name: string;
  values: CheckListValues[];
  selected: (number | string)[];
  boxTypes?: StyleType[];
  className?: string;
  onChange: (values: (string | number)[]) => void;
}

interface Props extends ComponentProps {
  localSelected: (number | string)[];
  onChildChange: (value: string | number) => void;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <ul className="list">
      {props.values.map((value, i) => {
        return (
          <li className="item" key={i}>
            <CheckBox
              isChecked={props.localSelected.includes(value.value)}
              value={value.value}
              label={value.label}
              name={props.name}
              types={props.boxTypes}
              onChange={props.onChildChange}
            />
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
const Container: React.FC<ComponentProps> = (componentPrps) => {
  const { selected, onChange } = componentPrps;

  const [localSelected, setLocalSelected] = useState<(number | string)[]>(selected);

  const onChildChange = (value: string | number) => {
    const newSelected = localSelected.slice();
    if (newSelected.includes(value)) {
      newSelected.splice(newSelected.indexOf(value), 1);
    } else {
      newSelected.push(value);
    }
    setLocalSelected(newSelected);
    onChange(newSelected);
  };

  useEffect(() => {
    setLocalSelected(selected);
  }, [selected]);

  const props = { localSelected, onChildChange };

  return <StyeldComponent {...componentPrps} {...props} />;
};
export default Container;
