import { css } from 'styled-components';

import { AspectFix } from 'components/style/Mixins';

export const base = css`
  
  width: 26px;
  ${AspectFix}
  & > .input{
    display: none;
    &:checked{
      & + .label{
          &:before{
            transform: scale(1);
          }
        }
      }
    }
  & > .label{
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    &:before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      transform: scale(0);
      transition: transform .2s;
      width: 100%;
      height: 100%;
      border: 2px solid #000;
      border-radius: 50%;
    }
    &:after{
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 1;
      transform: translate(-50%, -50%);
      display: block;
      width: 70%;
      height: 70%;
      border-radius: 50%;
    }
    &.-noSelect{
      font-size: 2rem;
      color: #888;
      &:after{
        content: none;
      }
      &:before{
        border-color: #888;
      }
    }
    & > svg{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
