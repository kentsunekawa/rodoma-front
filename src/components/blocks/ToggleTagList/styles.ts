import { css } from 'styled-components';

export const base = css`
  & > .list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    & > .item {
      margin-bottom: 5px;
      & > .inner {
        display: flex;
        align-items: center;
        & > .separator {
          color: ${({ theme }) => theme.colors.primary};
          font-size: 2.5rem;
          padding: 0 0.2em;
        }
      }

      .ToggleTag {
        width: 100%;
      }
    }
  }
`;

export const oneLine = css`
  & > .list {
    flex-wrap: nowrap;
    & > .item {
      margin-bottom: 0;
      .ToggleTag {
        .inner {
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
`;
