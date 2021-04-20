import { css } from 'styled-components';
import { mq } from 'components/style/AppTheme';

export const base = css`
  .row {
    &.-panel {
      margin-bottom: 0;
    }
  }
  .userSearch {
    width: 100%;
  }
  .bottom {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    width: 100%;
  }
  &.-limited {
    padding-bottom: 72px;
    .bottom {
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 5;
      display: flex;
      align-items: center;
      align-content: center;
      justify-content: center;
      width: 100%;
      padding: 20px 0;
      &:after {
        content: '';
        display: block;
        width: 180px;
        height: 60px;
        border-radius: 30px;
        position: absolute;
        left: 50%;
        bottom: 20px;
        z-index: -1;
        transform: translateX(-50%);
        background: ${({ theme }) => theme.darkBg};
      }
    }
    @media ${mq.tbMin_gt} {
      &.-limited {
        .bottom {
          padding: 30px 0;
          &:after {
            bottom: 30px;
          }
        }
      }
    }
  }
`;
