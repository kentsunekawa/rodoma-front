import React from 'react';
import Styled from 'styled-components';
import * as styles from './styles';
import { IconLike } from 'components/elements/icons'
import { IconMark } from 'components/elements/icons'

// component root class name
const CLASSNAME = 'StatusCounter';

// declare types
type StatusType = 'like' | 'mark';

interface ComponentProps {
  num: number;
  className?: string;
  StatusType: StatusType;
}

interface Props extends ComponentProps {}

// dom component
const Component: React.FC<Props> = ({ num, StatusType, className }) => (
  <div className={`${CLASSNAME} ${className}`}>
    <div className="inner">
      <div className="icon">
        {(() => {
          switch(StatusType) {
            case 'like':
              return <IconLike />;
            case 'mark':
              return <IconMark />;
            default:
              return false;
          }
        })()}
      </div>
      <div className="num">{num}</div>
    </div>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
  // extended styles
  ${({StatusType}) => styles[StatusType] }
`;

// container component
const Container: React.FC<ComponentProps> = ({
  num,
  className = '',
  StatusType,
}: ComponentProps) => {
  return <StyeldComponent {...{ num, className, StatusType }}></StyeldComponent>;
}
export default Container;