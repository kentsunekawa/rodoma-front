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
    margin-bottom: 30px;
    line-height: 1.2em;
    font-size: 2.6rem;
  }
  .description {
    display: block;
    font-size: 1.6rem;
    line-height: 2em;
    margin-bottom: 50px;
    text-align: center;
    color: ${({ theme }) => theme.themeColors.black};
  }
  .nextButton {
    margin: 0 auto;
  }
`;
