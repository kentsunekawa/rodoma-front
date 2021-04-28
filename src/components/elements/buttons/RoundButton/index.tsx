import React from 'react';
import { useHistory } from 'react-router-dom';
import Styled from 'styled-components';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'RoundButton';

// declare types
type StyleType =
  | 's'
  | 'm'
  | 'l'
  | 'gradient'
  | 'gray_dark'
  | 'gray_midium'
  | 'gray_light'
  | 'nega'
  | 'withIcon';

export interface ComponentProps {
  disabled?: boolean;
  className?: string;
  types?: StyleType[];
  icon?: React.ReactNode;
  link?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface Props extends ComponentProps {
  children: React.ReactNode;
  clickFunc: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

// dom component
export const Component: React.FC<Props> = (props: Props) => (
  <>
    {!props.link && !props.onClick ? (
      <div className={`${CLASSNAME} ${props.className}${props.disabled ? ' -disabled' : ''}`}>
        {props.children}
        {props.icon && <div className="icon">{props.icon}</div>}
      </div>
    ) : (
      <button
        className={`${CLASSNAME} ${props.className}${props.disabled ? ' -disabled' : ''}`}
        onClick={props.clickFunc}
      >
        {props.children}
        {props.icon && <div className="icon">{props.icon}</div>}
      </button>
    )}
  </>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
  // extended styles
  ${({ types }) => types && types.map((type) => styles[type])}}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const history = useHistory();

  const { disabled, link, onClick } = componentProps;

  const clickFunc = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled !== true) {
      if (onClick) onClick(e);
      if (link) history.push(link);
    }
  };

  const props = { clickFunc };

  return (
    <StyeldComponent {...componentProps} {...props}>
      {componentProps.children}
    </StyeldComponent>
  );
};

export default Container;
