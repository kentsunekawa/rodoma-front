import { css } from 'styled-components';

export const base = css`
  position: fixed;
  z-index: 250;
  top: 0;
  left: 0;
  display: none;
  width: 100%;
  & > .counter{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    span{
      display: block;
      width: 0;
      height: 100%;
      background: #fff;
    }
  }
  .MessageBand{
    min-height: 60px;
  }
`;