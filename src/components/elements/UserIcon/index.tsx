import React from 'react';
import Styled from 'styled-components';
import { AspectFix } from 'components/style/Mixins';

// component root class name
const CLASSNAME = 'UserIcon';

// declare types
interface ComponentProps {
  className?: string;
  url?: string;
  alt?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

// dom component
const Component: React.FC<ComponentProps> = (props: ComponentProps) => (
  <div className={`${CLASSNAME} ${props.className}`} onClick={props.onClick}>
    <div className="inner"></div>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${AspectFix}
  border-radius: 50%;
  overflow: hidden;  
  & > .inner{
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    ${({ url }) => url && `background-image: url(${url});`};
  }
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  return <StyeldComponent {...componentProps}></StyeldComponent>;
};

export default Container;
