import { css } from 'styled-components';

export const base = css`
  & > .list {
    & > .item {
      margin-top: 8px;
      &:first-child {
        margin-top: 0;
      }
    }
  }
`;
