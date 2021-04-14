import { css } from 'styled-components';

export const base = css`
  & > .input{
    display: none;
    &:checked{
      & + .label{
        & > .icon{
          background: ${({theme}) => theme.colors.primary};
          &:before{
            content: '';
            position: absolute;
            left: 45%;
            top: 40%;
            z-index: 1;
            display: block;
            width: 40%;
            height: 60%;
            border-right: 2px solid #fff;
            border-bottom: 2px solid #fff;
            transform: translate(-50%, -50%) rotate(45deg);
          }
        }    
      }    
    }
  }
  & > .label{
    display: flex;
    align-items: center;
    align-content: center;
    color: ${({theme}) => theme.themeColors.black};
    & > .icon{
      position: relative;
      display: block;
      width: 20px;
      height: 20px;
      background: #fff;
      border-radius: 2px;
      margin-right: 8px;
    }
    & > .text{
      font-size: 1.4rem;
      line-height: 20px;
      padding-top: .2em;
      color: inherit;
    }
    &:hover{
      cursor: pointer;
    }
  }  
`;

export const nega = css`
  & > .label{
    & > .text{
      color: #fff;
    }
  }
`;

export const outline = css`
  & > .label{
    & > .icon{
      border: 2px solid ${({theme}) => theme.colors.primary};
      background: none;
    }
  }
`;
