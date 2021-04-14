import { css } from 'styled-components';
import {
  LogoDraw,
} from 'components/style/Mixins';

export const base = css`
  display: none;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
  & > .logo{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    svg{
      fill: none;
      stroke: #fff;
      stroke-width: 2px;
      stroke-dasharray: 317;
      animation: ${LogoDraw} 3s linear infinite ;
    }
  }
`;

