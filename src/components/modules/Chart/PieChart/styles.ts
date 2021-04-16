import { css } from 'styled-components';
import { AspectFix } from 'components/style/Mixins';

export const base = css`
  .chartWrapper {
    width: 100%;
    ${AspectFix}
    & > .chart {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;
