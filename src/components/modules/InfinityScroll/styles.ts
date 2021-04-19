import { css } from 'styled-components';
import { mq } from 'components/style/AppTheme';

export const base = css`
  .listMessage {
    display: block;
    text-align: center;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.themeColors.gray_midium};
    padding: 20px 0;
  }
  & > .num {
    & > .numText {
      display: flex;
      justify-content: flex-end;
      align-content: center;
      align-items: center;
      width: 50px;
      margin-left: auto;
      padding-right: 0.5em;
      font-size: 1.2rem;
      text-align: right;
      color: ${({ theme }) => theme.themeColors.gray_midium};
      letter-spacing: 0.05em;
      line-height: 1.6em;
      span {
        font-size: 1.4rem;
        font-weight: bold;
        color: inherit;
        letter-spacing: inherit;
        line-height: inherit;
        padding-left: 0.2em;
      }
    }
  }
  & > .main {
    margin-top: 10px;
  }
  @media ${mq.tbMin_gt} {
    .listMessage {
      padding: 40px 0;
    }
    & > .num {
      & > .numText {
        font-size: 1.4rem;
        span {
          font-size: 1.6rem;
        }
      }
    }
    & > .main {
      margin-top: 40px;
    }
  }
`;
