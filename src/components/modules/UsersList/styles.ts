import { css } from 'styled-components';
import { mq } from 'components/style/AppTheme';

export const base = css`
  & > .list {
    display: flex;
    flex-wrap: wrap;
    & > .item {
      width: 50%;
      padding: 15px 0;
      & > a {
        display: block;
      }
      & > .UserBlock {
        width: 100%;
      }
    }
  }

  @media ${mq.tbMin_gt} {
    & > .list {
      & > .item {
        width: 33.3333%;
        margin-bottom: 40px;
      }
    }
  }

  @media ${mq.pcMin_gt} {
    & > .list {
      & > .item {
        width: 25%;
        margin-bottom: 60px;
      }
    }
  }

  @media ${mq.pcLarge_gt} {
    & > .list {
      & > .item {
        width: 20%;
      }
    }
  }
`;
