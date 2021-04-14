import React from 'react';
import Styled from 'styled-components';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'Tag';

// declare types
export type StyleType = 'primary' | 'gradient' | 'success' | 'error';

interface ComponentProps {
  className?: string;
  types?: StyleType[];
  value: string;
  icon?: React.ReactNode,
}

interface Props extends ComponentProps {}

// dom component
const Component: React.FC<Props> = props => (
  <div className={`${CLASSNAME} ${props.className}`}>
    {
      props.icon
      ? <div className="inner -withIcon">
          <span className='icon'>{props.icon}</span>
          <span className='text'>{props.value}</span>
      </div>
      : <div className="inner">
        <span className='text'>{props.value}</span>
      </div>
    }
  </div>
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