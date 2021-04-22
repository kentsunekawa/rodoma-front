import { css } from 'styled-components';

export const base = css`
  .CoverContent {
    & > .content {
      width: 80%;
    }
  }
  .row {
    text-align: center;
    margin-bottom: 40px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .logo {
    width: 80px;
    margin: 0 auto 40px;
  }
  .title {
    display: block;
    text-align: center;
    margin-bottom: 32px;
    line-height: 1.2em;
    font-size: 2.8rem;
  }
  .description {
    margin-bottom: 56px;
    p {
      display: block;
      font-size: 1.4rem;
      line-height: 2em;
      text-align: center;
      color: ${({ theme }) => theme.themeColors.black};
      margin-bottom: 16px;
      .name {
        display: inline-block;
        color: ${({ theme }) => theme.colors.primary};
        font-size: 140%;
        span {
          font-size: 1.2rem;
        }
      }
    }
  }
  .nextButton {
    margin: 0 auto;
  }
`;
