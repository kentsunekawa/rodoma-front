import { css } from 'styled-components';

export const base = css`
  display: flex;
  justify-content: space-between;
  & > .selector {
    width: 130px;
  }
  & > .input {
    width: calc(100% - 135px);
  }
  .Selector {
    background: #fff;
  }
`;
