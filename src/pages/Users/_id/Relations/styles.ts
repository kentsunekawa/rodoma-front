import { css } from 'styled-components';

export const base = css`
  .relationListArea {
    & > .TabChanger {
      & > .Tab {
        width: 247px;
        margin: 0 auto;
      }
    }
    .TabContent {
      padding-top: 20px;
    }
  }
`;
