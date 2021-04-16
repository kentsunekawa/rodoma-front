import { css } from 'styled-components';

export const base = css`
  & > .CoverContent {
    & > .content {
      width: 240px;
      .Paragraph {
        margin-bottom: 40px;
      }
      .row {
        margin-bottom: 60px;
      }
      .RoundButton {
        margin: 0 auto;
      }
    }
  }
`;
