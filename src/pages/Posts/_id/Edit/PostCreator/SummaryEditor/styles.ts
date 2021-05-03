import { css } from 'styled-components';
import { mq } from 'components/style/AppTheme';

export const base = css`
  .row {
    &.-title {
      margin-bottom: 60px;
    }
  }
  .cover {
    position: relative;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    background-size: cover;
    background-position: center;
    &:before {
      content: '';
      display: block;
      padding-top: 50%;
    }
    .button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
      max-width: 270;
    }
  }
  .main {
    padding: 32px 32px 64px;
  }
  .categorySelector {
    margin-bottom: 20px;
  }
  .bottom {
    position: fixed;
    left: 0;
    bottom: 0;
    padding: 20px 0;
    z-index: 5;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    align-content: flex-end;
    .desideButton {
      min-width: auto;
      margin: 0 12px 0 0;
      &:last-child {
        margin: 0;
      }
    }
  }
  @media ${mq.tbMin_gt} {
    .cover {
      &::before {
        padding-top: 30%;
      }
    }
    .main {
      padding: 48px 48px 72px;
    }
    .bottom {
      padding: 30px 0;
    }
  }
`;
