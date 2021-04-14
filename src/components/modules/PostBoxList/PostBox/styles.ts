import { css } from 'styled-components';
import {
  WithShadow
} from 'components/style/Mixins';

export const base = css`
  position: relative;
  display: block;
  width: 100%; 
  border-radius: 10px;
  overflow: hidden;
  background: ${({theme}) => theme.bg};
  ${WithShadow}
  border: ${({theme}) => theme.border};
  & > .nav{
    position: absolute;
    z-index: 1;
    right: 5px;
    top: 5px;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    & > .CircleButton,
    & > a{
      margin-left: 5px;
    }
  }
  & > .link{
    color: ${({theme}) => theme.colors.black};
    & > .status{
      position: absolute;
      left: 5px;
      top: 5px;
      z-index: 1;
    }
    & > .imageArea{
      position: relative;
      height: 135px;
      background: ${({theme}) => theme.colors.gray_light};
      & > .image{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-size: cover;
        background-position: center; 
      }
    }
    & > .info{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      align-content: center;
      justify-content: space-between;
      padding: 10px;
      & > .title{
        display: block;
        width: 100%;
        margin-bottom: 10px;
      }
      & > .status{
        display: flex;
        justify-content: flex-start;
        & > .StatusCounter{
          margin-right: 5px;
        }
      }
    }
    
  }
`;

