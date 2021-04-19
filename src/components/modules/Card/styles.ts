import { css } from 'styled-components';

export const base = css`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  width: 100%;
  height: 100vh;
  & > .panel {
    position: absolute;
    bottom: 0;
    left: 50%;
    z-index: 1;
    width: 100%;
    max-width: 960px;
    height: 80%;
    background: ${({ theme }) => theme.bg};
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    transform: translateX(-50%);
    & > .inner {
      width: 100%;
      height: 100%;
      overflow-y: scroll;
    }
    & > .close {
      position: absolute;
      top: 20px;
      right: 20px;
      z-index: 5;
    }
  }
`;
