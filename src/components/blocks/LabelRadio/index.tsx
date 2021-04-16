import React from 'react';
import Styled from 'styled-components';
import * as styles from './styles';

import { LABEL_LIST } from 'utils';

import Radio from './Radio';

// component root class name
const CLASSNAME = 'LabelRadio';

interface ComponentProps {
  name: string;
  values: typeof LABEL_LIST;
  selected: typeof LABEL_LIST[number];
  className?: string;
  onChange: (value: number) => void;
}

// dom component
const Component: React.FC<ComponentProps> = (props: ComponentProps) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <ul className="list">
      {props.values.map((value, i) => {
        return (
          <li className="item" key={i}>
            <Radio
              isChecked={props.selected === value}
              value={value}
              name={props.name}
              onChange={props.onChange}
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
  return <StyeldComponent {...componentPrps}></StyeldComponent>;
};
export default Container;
