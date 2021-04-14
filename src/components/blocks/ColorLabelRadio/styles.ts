import { css } from 'styled-components';

import {
  AspectFix
} from 'components/style/Mixins';

export const base = css`
  & > .list{
    display: flex;
    justify-content: flex-start;
    & > .item{
      width: 30px;
      margin-right: 5px;
      & > input{
        display: none;
        &:checked{
          & + .label{
            & > .ring{
              
              transform: translate(-50%, -50%) scale(1);
            }    
          }
        }
      }
      & > .label{
        ${AspectFix}
        display: block;
        &:hover{
          cursor: pointer;
        }
        & > span{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: block;
          border-radius: 50%;
        }
        & > .circle{
          width: 70%;
          height: 70%;
        }
        & > .ring{
          width: 100%;
          height: 100%;
          transform: translate(-50%, -50%) scale(.1);
          transition: transform .2s;
        }
      }
    }
  }
`;