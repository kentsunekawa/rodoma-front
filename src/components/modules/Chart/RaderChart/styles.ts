import { css } from 'styled-components';

export const base = css`
  .main {
    padding: 0 !important;
    height: 100%;
  }
  .chart {
    width: 100%;
    height: 100%;
  }
  .recharts-polar-angle-axis-tick-value {
    fill: #fff;
    font-size: 1.6rem;
    cursor: pointer;
    transition: opacity 0.3s;
    &:hover {
      opacity: 0.5;
    }
  }
`;
