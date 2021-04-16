import { css } from 'styled-components';

export const base = css`
  & > .inner {
    padding: 20px 20px 0;
    & > .scrollableArea {
      padding-bottom: 90px;
    }
    & > .inputArea {
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 10;
      width: 100%;
    }
  }
  .CommentList {
    width: 100%;
  }
`;
