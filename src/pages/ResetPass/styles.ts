import { css } from 'styled-components';

export const base = css`
  & > .CoverContent {
    & > .content {
      width: 240px;
      .Paragraph {
        margin-bottom: 40px;
      }
      .row {
        margin-bottom: 40px;
      }
      .RoundButton {
        margin: 60px auto 0;
      }
    }
  }
`;
