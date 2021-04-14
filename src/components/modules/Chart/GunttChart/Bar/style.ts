import { css } from 'styled-components';

import { Gradient } from 'components/style/Mixins';

export const base = css`
  position: relative;
  height: 20px;
  .bar{
    position: absolute;
    top: 0;
    z-index: 0;
    display: block;
    height: 100%;
    border-radius: 10px;
    border: 1px solid #fff;
  }
  .icon{
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    transform: translate(-50%, -50%);
    width: 40px;
    font-size: 2rem;
    color: #fff;
  }
`;