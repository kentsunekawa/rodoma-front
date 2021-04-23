import { css } from 'styled-components';
import { mq } from 'components/style/AppTheme';

export const base = css`
  .title {
    display: block;
    text-align: center;
    line-height: 1.1em;
    margin-bottom: 20px;
    letter-spacing: 0em;
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
    .title {
      margin-bottom: 40px;
      font-size: 4rem;
    }
    .text {
      margin-bottom: 56px;
      .notPc {
        display: none;
      }
    }
    .row {
      margin-bottom: 32px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .desideButton {
      width: 200px;
      margin: 0 10px;
    }
  }
`;
