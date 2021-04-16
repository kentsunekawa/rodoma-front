import React from 'react';
import Styled from 'styled-components';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'Tabs';

// declare types
type StyleType = 'rounded' | 'switcher' | 'simple';

interface ComponentProps {
  selected?: number;
  tabList: React.ReactElement[] | string[];
  className?: string;
  tabType?: StyleType;
  onChange?: (i: number) => void;
}

interface Props extends ComponentProps {
  onButtonClick: (i: number) => void;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <ul className="list">
      {props.tabList.map((tab: React.ReactElement | string, i: number) => {
        return (
          <li key={i} className={`item${props.selected === i ? ' -selected' : ''}`}>
            <button
              onClick={() => props.onButtonClick(i)}
              className={`button${props.selected === i ? ' -selected' : ''}`}
            >
              {tab}
            </button>
          </li>
        );
      })}
    </ul>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
  & > .list{
    & > .item{
      width: ${({ tabList }) => `${100 / tabList.length}%`};
    }
  }
  // extended styles
  ${({ tabType }) => tabType && styles[tabType]}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const { onChange } = componentProps;

  const onButtonClick = (i: number) => {
    onChange && onChange(i);
  };

  const props = { onButtonClick };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
