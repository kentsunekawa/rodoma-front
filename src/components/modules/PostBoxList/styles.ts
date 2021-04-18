import { css } from 'styled-components';
import { mq } from 'components/style/AppTheme';

export const base = css`
  & > .list {
    & > .item {
      margin-bottom: 25px;
    }
  }
  @media ${mq.tbMin_gt} {
    & > .list {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      & > .item {
        width: calc(50% - 15px);
        margin-right: 30px;
        margin-bottom: 40px;
        &:nth-of-type(even) {
          margin-right: 0;
        }
      }
    }
  }

  @media ${mq.pcLarge_gt} {
    & > .list {
      & > .item {
        width: calc(33.3333% - 20px);
        margin-bottom: 60px;
        &:nth-of-type(even) {
          margin-right: 30px;
        }
        &:nth-of-type(3n) {
          margin-right: 0;
        }
      }
    }
  }
`;
