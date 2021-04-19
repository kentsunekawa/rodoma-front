import { css } from 'styled-components';

export const base = css`
  & > .list {
    display: flex;
    justify-content: center;
    & > .item {
      padding: 0 2px;
      margin-bottom: 3px;
    }
  }
`;

export const alignLeft = css`
  & > .list {
    justify-content: flex-start;
    & > .item {
      margin-right: 3px;
    }
  }
`;

export const alignRight = css`
  & > .list {
    justify-content: flex-end;
    & > .item {
      margin-left: 3px;
    }
  }
`;

export const center = css`
  & > .list {
    flex-wrap: wrap;
    & > .item {
      width: 100%;
      .Tag {
        width: 100%;
      }
    }
  }
`;
