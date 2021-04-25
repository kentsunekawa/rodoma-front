import React, { useState } from 'react';
import Styled from 'styled-components';
import * as styles from './styles';

import { LABEL_LIST } from 'utils';

import Radio from './Radio';

// component root class name
const CLASSNAME = 'LabelRadio';

export interface ComponentProps {
  name: string;
  values: typeof LABEL_LIST;
  selected: typeof LABEL_LIST[number];
  className?: string;
  onChange?: (value: number) => void;
}

interface Props extends ComponentProps {
  localSelected: number;
  change: (value: number) => void;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <ul className="list">
      {props.values.map((value, i) => {
        return (
          <li className="item" key={i}>
            <Radio
              isChecked={props.localSelected === value}
              value={value}
              name={props.name}
              onChange={props.change}
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
  const [localSelected, setLocalSelected] = useState<number>(selected);

  const change = (value: number) => {
    setLocalSelected(value);
    if (onChange) onChange(value);
  };

  const props = { localSelected, change };

  return <StyeldComponent {...componentPrps} {...props}></StyeldComponent>;
};
export default Container;
