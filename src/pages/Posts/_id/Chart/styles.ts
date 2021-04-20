import { css } from 'styled-components';

export const base = css`
  & > .inner {
    padding-top: 20px;
  }
  &.-login {
    & .GunttChart,
    & .RaderChart {
      & > .wrapper {
        & > .inner {
          & > .main {
            padding-bottom: 60px;
          }
        }
      }
    }
  }
`;
