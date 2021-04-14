import { css } from 'styled-components';

export const base = css`
  & > .list{
    display: flex;
    justify-content: flex-start;
    & > .item{
      margin-right: 8px;
    }
  }
`;