import { css } from 'styled-components';
import { mq } from 'components/style/AppTheme';

export const base = css`
  .title {
    display: block;
    text-align: center;
    line-height: 1.4em;
    margin-bottom: 20px;
  }
  .text {
    text-align: center;
    margin-bottom: 20px;
  }
  .row {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 24px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .desideButton {
    width: 100%;
    margin-bottom: 16px;
  }

  @media ${mq.tbMin_gt} {
    .row {
      margin-bottom: 16px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .desideButton {
      width: auto;
      margin: 0 10px;
    }
  }
`;
