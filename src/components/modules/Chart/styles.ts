import { css } from 'styled-components';
import {
  Gradient, 
} from 'components/style/Mixins';

export const base = css`
  position: relative;
  /* position: fixed;
  left: 0;
  bottom: 0;
  z-index: 50; */
  width: 100%;
  height: 100%;
  & > .panel{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 5px 10px 2px rgba(0, 0, 0, .2) inset;
    ${Gradient}
    & > .chart{
    position: relative;
    width: 100%;
    height: 100%;
    & > .nav{
      position: absolute;
      top: -21px;
      right: 20px;
      z-index: 5;
      display: flex;
      justify-content: flex-end;
      & > button{
        margin-left: 5px;
      }
    }
    & > .wrapper{
      width: 100%;
      height: 100%;
      overflow: hidden;
      & > .inner{
        width: 100%;
        height: 100%;
        overflow-y: scroll;
      }
    }
    
  }
  }


`;


