import { css } from 'styled-components';
import { mq } from 'components/style/AppTheme';

export const base = css`
  background: #f0f0f0;
  padding: 56px 20px;
  & > .inner {
    & > .title {
      display: block;
      width: 100%;
      text-align: center;
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.primary};
      margin-bottom: 32px;
      span {
        display: block;
        font-size: 60%;
        margin-top: 10px;
      }
    }
  }
  .panelList {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .panelItem {
    width: calc(50% - 5px);
    margin: 0 10px 10px 0;
    &:nth-of-type(even) {
      margin-right: 0;
    }
    &:last-of-type {
      margin: 0;
    }
  }
  @media ${mq.tbMin_gt} {
    padding: 64px 40px;
    & > .inner {
      & > .title {
        margin-bottom: 40px;
        font-size: 2.4rem;
        span {
          margin-top: 16px;
        }
      }
    }
    .panelItem {
      width: calc(20% - 8px);
      margin-right: 8px;
      margin-bottom: 0;
      &:nth-of-type(even) {
        margin-right: 8px;
      }

      &:last-of-type {
        margin: 0;
      }
    }
  }

  @media ${mq.pcMin_gt} {
    padding: 104px 40px;
    & > .inner {
      width: 100%;
      max-width: 880px;
      margin: 0 auto;
      & > .title {
        margin-bottom: 56px;
      }
    }
  }
`;
