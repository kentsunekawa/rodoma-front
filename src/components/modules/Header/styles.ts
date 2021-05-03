import { css } from 'styled-components';

import { Gradient, WithShadow, AspectFix } from 'components/style/Mixins';

export const base = css`
  display: flex;
  left: 0;
  top: 0;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 60px;
  padding-right: 10px;
  ${Gradient}
  ${WithShadow}
  & > .logo {
    display: flex;
    width: 60px;
    ${AspectFix}
    svg {
      fill: #fff;
      width: 60%;
      margin: 0 auto;
    }
  }
  & > .nav {
    display: flex;
    align-items: flex-end;
    align-content: flex-end;
    & > .item {
      border-radius: 50%;
      overflow: hidden;
      & > .button {
        display: block;
        width: 42px;
        ${AspectFix}
        & > .UserIcon {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
        }
      }
    }
  }
`;
