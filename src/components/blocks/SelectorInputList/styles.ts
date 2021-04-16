import { css } from 'styled-components';

export const base = css`
  & > .inputArea {
    & > .list {
      & > .item {
        margin-bottom: 15px;
      }
    }
  }
  & > .buttonArea {
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }
`;
