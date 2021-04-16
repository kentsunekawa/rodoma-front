import { css } from 'styled-components';

export const base = css`
  & > .CoverContent {
    & > .content {
      & > .Paragraph {
        &.title {
          margin-bottom: 40px;
        }
        display: block;
        margin-bottom: 60px;
      }
      & > .RoundButton {
        margin: 0 auto;
      }
    }
  }
`;
