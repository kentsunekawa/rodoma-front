import { css } from 'styled-components';

export const base = css`
  & > .Tag {
    width: 100%;
    margin-bottom: 5px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
