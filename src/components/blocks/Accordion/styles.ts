import { css } from 'styled-components';

export const base = css`
  & > .parent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    border-bottom: 2px solid #fff;
    padding: 5px 0;
    & > .parentText {
      width: calc(100% - 80px);
    }
    & > .parentOpenButton {
      width: 30px;
    }
  }
  & > .child {
    padding-left: 30px;
    overflow: hidden;
    height: 0;
    &.-open {
      height: auto;
    }
    & > .inner {
      padding-bottom: 15px;
      & > .list {
        & > .item {
          width: 100%;
          border-bottom: 2px solid #fff;
          .TextButton {
            width: 100%;
            text-align: left;
            padding: 0.8em 0;
          }
        }
      }
    }
  }
`;
