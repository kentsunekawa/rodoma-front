import { css } from 'styled-components';

export const base = css`
  .relationListArea {
    & > .TabChanger {
      & > .Tab {
        width: 80%;
        max-width: 400px;
        margin: 0 auto;
      }
    }
    .TabContent {
      padding-top: 20px;
    }
  }
`;
