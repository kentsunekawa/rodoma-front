import { css } from 'styled-components';

export const base = css`
  & > .inner {
    padding-top: 20px;
  }
  &.-login {
    & .GunttChart,
    & .PieChart {
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
