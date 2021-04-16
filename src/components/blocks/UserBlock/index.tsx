import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

import UserIcon from 'components/elements/UserIcon';
import CircleButton from 'components/elements/buttons/CircleButton';

import * as styles from './styles';

// component root class name
const CLASSNAME = 'UserBlock';

// declare types
type StyleType = 'm' | 's' | 'l' | 'iconLeft' | 'iconRight' | 'alignCenter';

interface ComponentProps {
  linkable?: boolean;
  userId?: number;
  className?: string;
  userName?: string;
  icon_url?: string;
  types?: StyleType[];
  buttonIcon?: React.ReactNode;
  onButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

// dom component
const Component: React.FC<ComponentProps> = (props: ComponentProps) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <div className="icon">
      {props.onButtonClick && (
        <div className="button">
          <CircleButton types={['s', 'gray_dark']} onClick={props.onButtonClick}>
            {props.buttonIcon}
          </CircleButton>
        </div>
      )}
      {props.linkable ? (
        <Link to={`/users/${props.userId}`}>
          <UserIcon url={props.icon_url} />
        </Link>
      ) : (
        <UserIcon url={props.icon_url} />
      )}
    </div>
    {props.userName && <p className="name">{props.userName}</p>}
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
