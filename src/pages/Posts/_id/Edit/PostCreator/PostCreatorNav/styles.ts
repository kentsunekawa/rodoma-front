import { css } from 'styled-components';

export const base = css`
  display: flex;
  width: 100%;
  justify-content: center;
  & > .button {
    margin: 0 4px;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;
