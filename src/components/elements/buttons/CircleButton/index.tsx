import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'CircleButton';

// declare types
type StyleType = 
  'xxs'
  | 'xs'
  | 's'
  | 'm'
  | 'l'
  | 'gradient'
  | 'gray_dark'
  | 'gray_midium'
  | 'gray_light'
  | 'primary'
  | 'secondary'
  | 'posi'
  | 'outline';

interface ComponentProps {
  className?: string;
  types?: StyleType[];
  link?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface Props extends ComponentProps {}

// dom component
const Component: React.FC<Props> = props => (
  <>
    {
      props.onClick && <button className={`${CLASSNAME} ${props.className}`} onClick={props.onClick}>
        <div className='inner'>{props.children}</div>
      </button>
    }
    {
      props.link && (
        <Link className={`${CLASSNAME} ${props.className}`} to={props.link}>
          <div className='inner'>{props.children}</div>
        </Link>
      )
    }
    {
      (!props.onClick && !props.link) && <div className={`${CLASSNAME} ${props.className}`}>
        <div className='inner'>{props.children}</div>
      </div>
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
  return <StyeldComponent { ...componentProps }></StyeldComponent>;
}

export default Container;