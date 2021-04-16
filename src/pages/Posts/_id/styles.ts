import { css } from 'styled-components';

export const base = css`
  .mainContents {
    padding-top: 240px;
  }
  .postHeader {
    position: fixed;
    left: 0;
    top: 60px;
    z-index: 20;
    background: ${({ theme }) => theme.bg};
    width: 100%;
    .mainTab {
      padding: 0 20px;
    }
    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: calc(100% - 2px);
      z-index: -1;
      display: block;
      width: 100%;
      height: 30px;
      background: ${({ theme }) => theme.fadeOut};
    }
  }
  .chartWrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 50;
    width: 100%;
    height: 40vh;
    transition: height 0.2s ease-out;
  }
  .bottomNav {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 60;
  }
  &.-comments {
    .bottomNav {
      display: none;
    }
  }
`;
