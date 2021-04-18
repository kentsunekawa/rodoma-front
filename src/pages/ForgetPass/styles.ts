import { css } from 'styled-components';

export const base = css`
  & > .CoverContent {
    & > .content {
      width: 240px;
      .Paragraph {
        margin-bottom: 40px;
      }
      .RoundButton {
        margin: 0 auto;
      }
    }
  }
  .row {
    margin-bottom: 40px;
    text-align: center;
    &.-input {
      margin-bottom: 30px;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
