import { css } from 'styled-components';
import { mq } from 'components/style/AppTheme';

export const base = css`
  position: relative;
  width: 100%;
  height: 100%;
  & > .inner {
    & > .upper {
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      width: 100%;
      height: 240px;
      & > .UserBlock {
        & > p {
          color: #fff;
        }
      }
    }
    & > .menu {
      & > .list {
        & > .item {
          text-align: center;
          margin-bottom: 24px;
        }
      }
    }
  }
  & > .bottom {
    position: absolute;
    left: 0;
    bottom: 140px;
    text-align: center;
    width: 100%;
  }

  @media ${mq.tbMin_gt} {
    & > .bottom {
      bottom: 80px;
    }
    & > .inner {
      margin-top: 40px;
      & > .menu {
        margin-top: 32px;
      }
    }
  }
`;
