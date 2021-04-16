import { css } from 'styled-components';

export const base = css`
  & > .inner {
    padding: 20px 20px 40px;
    & > .title {
      margin-bottom: 16px;
    }
  }
`;
