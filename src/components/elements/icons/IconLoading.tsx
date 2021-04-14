import React from 'react';
import styled, {keyframes} from 'styled-components';

import { 
  AspectFix,
 } from 'components/style/Mixins';

const IconLoading: React.FC<{ className?: string; }> = props => {
  return <div className={`${props.className} IconLoading`}>
    <svg className="back" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
      <path d="M25,2C12.297,2,2,12.297,2,25s10.297,23,23,23s23-10.297,23-23S37.703,2,25,2"/>
    </svg>
    <svg className="front" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
      <path d="M25,2C12.297,2,2,12.297,2,25s10.297,23,23,23s23-10.297,23-23S37.703,2,25,2"/>
    </svg>
  </div>;
}

const LogoDraw = keyframes`
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 288;
  }
`;

const rotete = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledComponent = styled(IconLoading)`
  position: relative;
  animation: ${rotete} 1.5s linear infinite ;
  ${AspectFix}  
  & > svg{
    fill: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    display: block;
  }
  .back{
    stroke: #efefef;
    stroke-width: 2px;
  }
  .front{
    stroke: ${({theme}) => theme.colors.primary};
    stroke-width: 2px;
    stroke-dasharray: 144;
    animation: ${LogoDraw} 3s linear infinite ;
  }
`;



export default StyledComponent;