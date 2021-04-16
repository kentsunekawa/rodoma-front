import React from 'react';
import Styled from 'styled-components';
import * as styles from './styles';
import ToggleTag from 'components/blocks/ToggleTagList/ToggleTag';
// import IconClose from 'components/elements/icons';

// component root class name
const CLASSNAME = 'ToggleTagList';

type StyleType = 'inlineBlock';

// declare types
interface ComponentProps {
  separator?: string;
  list: {
    id: number;
    name: string;
  }[];
  icon: React.ReactNode;
  className?: string;
  onClick: (i: number) => void;
  types?: StyleType[];
}

// dom component
const Component: React.FC<ComponentProps> = (props: ComponentProps) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <ul className="list">
      {props.list.map((item, i) => {
        return (
          <li className="item" key={i}>
            <div className="inner">
              {props.separator && i !== 0 && <span className="separator">{props.separator}</span>}
              <ToggleTag
                key={i}
                value={item.name}
                icon={props.icon}
                onClick={() => props.onClick(i)}
              />
            </div>
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
  const props = {};

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
