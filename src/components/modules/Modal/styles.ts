import { css } from 'styled-components';
import { WithShadow } from 'components/style/Mixins';
import { mq } from 'components/style/AppTheme';

export const base = css`
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 200;
  & > .mask {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    display: block;
    width: 100%;
    & > .panel {
      position: absolute;
      display: block;
      left: 50%;
      top: 50%;
      z-index: 210;
      transform: translate(-50%, -50%);
      width: 90%;
      max-width: 500px;
      ${WithShadow}
      & > .inner {
        position: relative;
        z-index: 0;
        width: 100%;
        height: 100%;
        max-height: 70vh;
        overflow-y: scroll;
        padding: 32px;
        border-radius: 5px;
        overflow-y: scroll;
        overflow-x: hidden;
        background: ${({ theme }) => theme.darkBg};
      }
      & > .closeButton {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
        transform: translate(50%, -50%);
      }
    }
  }
  @media ${mq.tbMin_gt} {
    & > .mask {
      & > .panel {
        & > .inner {
          max-height: 95vh;
        }
      }
    }
  }
`;

export const wide = css`
  @media ${mq.tbMin_gt} {
    & > .mask {
      & > .panel {
        max-width: 700px;
      }
    }
  }
`;
