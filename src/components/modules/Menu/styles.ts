import { css } from 'styled-components';

import { Gradient, WithShadow } from 'components/style/Mixins';

export const base = css`
  display: none;
  position: fixed;
  z-index: 150;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  & > .panel {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    width: 70%;
    height: 100%;
    ${Gradient}
    ${WithShadow}
    & > .header {
      position: relative;
      z-index: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      align-content: center;
      width: 100%;
      height: 60px;
      padding: 0 10px;
      & > .Switch {
        margin-left: 5px;
      }
    }
    & > .inner {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      width: 100%;
      height: 100%;
    }
  }
`;
