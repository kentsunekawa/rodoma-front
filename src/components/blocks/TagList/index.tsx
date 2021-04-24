import React from 'react';
import Styled from 'styled-components';
import * as styles from './styles';
import Tag, { StyleType as TagStyleType } from 'components/blocks/TagList/Tag';

// component root class name
const CLASSNAME = 'TagList';

// declare types
type StyleType = 'alignLeft' | 'alignRight' | 'center';

interface ComponentProps {
  maxLength?: number;
  values: string[];
  tagTypes: TagStyleType[];
  className?: string;
  types?: StyleType[];
}

// dom component
const Component: React.FC<ComponentProps> = (props: ComponentProps) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <ul className="list">
      {props.values.map((value, i) => {
        return (
          <li key={i} className="item">
            <Tag types={props.tagTypes} value={value} maxLength={props.maxLength} />
          </li>
        );
      })}
    </ul>
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
  return <StyeldComponent {...componentProps}></StyeldComponent>;
};
export default Container;
