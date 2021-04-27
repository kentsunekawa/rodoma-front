import React from 'react';
import Styled from 'styled-components';
import * as styles from './styles';
import { IconLike } from 'components/elements/icons';
import { IconMark } from 'components/elements/icons';

// component root class name
const CLASSNAME = 'StatusCounter';

// declare types
type StatusType = 'like' | 'mark';

export interface ComponentProps {
  num: number;
  className?: string;
  statusType: StatusType;
}

// dom component
const Component: React.FC<ComponentProps> = (props: ComponentProps) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <div className="inner">
      <div className="icon">
        {(() => {
          switch (props.statusType) {
            case 'like':
              return <IconLike />;
            case 'mark':
              return <IconMark />;
            default:
              return false;
          }
        })()}
      </div>
      <div className="num">{props.num}</div>
    </div>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
  // extended styles
  ${({ statusType }) => styles[statusType]}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  return <StyeldComponent {...componentProps}></StyeldComponent>;
};
export default Container;
