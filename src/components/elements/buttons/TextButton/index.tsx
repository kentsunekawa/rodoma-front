import React from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'TextButton';

// declare types
type StyleType = 'primary' | 'nega' | 'withIconRight' | 's' | 'm' | 'l' | 'gray_midium' | 'block' | 'alignCenter';

interface ComponentProps {
  className?: string;
  children: React.ReactNode;
  types?: StyleType[];
  icon?: React.ReactNode;
  link?: string;
  href?: string;
  target?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface Props extends ComponentProps {}

// dom component
const Component: React.FC<Props> = props => (
  <>
    {
      props.onClick
      ? <button className={`${CLASSNAME} ${props.className}`} onClick={props.onClick}>
        {props.children}
        {props.icon && (
          <div className="icon">
            {props.icon}
          </div>
        )}
      </button>
      : (<>
        {
          props.link
            ? <Link  className={`${CLASSNAME} ${props.className}`} to={props.link}>
              {props.children}
              {props.icon && (
                <div className="icon">
                  {props.icon}
                </div>
              )}
            </Link>
            : <a  className={`${CLASSNAME} ${props.className}`} href={props.href} target={props.target}>
              {props.children}
              {props.icon && (
                <div className="icon">
                  {props.icon}
                </div>
              )}
            </a>
        }
      </>)
    }
  </>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
  // extended styles
  ${({types}) => types && types.map(type => styles[type])}}
`;

// container component
const Container: React.FC<ComponentProps> = componentProps => {
  return <StyeldComponent { ...componentProps } ></StyeldComponent>;
}

export default Container;