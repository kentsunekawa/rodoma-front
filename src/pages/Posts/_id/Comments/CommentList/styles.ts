import { css } from 'styled-components';

export const base = css`
  & > .comment{
    position: relative;
    margin-top: 32px;
    & > .loading{
      position: absolute;
      top: 0;
      left: 0;
      z-index: 5;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, .5);
      & > .IconLoading{
        display: block;
        width: 30px;
      }
    }
  }
`;
