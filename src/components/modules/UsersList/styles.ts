import { css } from 'styled-components';

export const base = css`
  & > .list {
    display: flex;
    flex-wrap: wrap;
    & > .item {
      width: 50%;
      padding: 15px 0;
      & > a {
        display: block;
      }
      & > .UserBlock {
        width: 100%;
      }
    }
  }
`;
