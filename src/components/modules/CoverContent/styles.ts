import { css } from 'styled-components';

export const base = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  width: 100%;
  height: 100%;
  background: ${({theme}) => theme.bg};
  & > .content{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 500px;
  }
  .RoundButton{
    min-width: 172px;
  }
`;

