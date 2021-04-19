import { css } from 'styled-components';
import { mq } from 'components/style/AppTheme';

export const base = css`
  .mainContents {
    padding-top: 240px;
    width: 100%;
    margin: 0 auto;
  }
  .postHeader {
    position: fixed;
    left: 0;
    top: 60px;
    z-index: 20;
    background: ${({ theme }) => theme.bg};
    width: 100%;
    .mainTab {
      width: calc(100% - 40px);
      margin: 0 auto;
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
    max-width: 960px;
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

  @media ${mq.tbMin_gt} {
    .mainContents {
      max-width: 960px;
    }
    .postHeader {
      padding-bottom: 10px;
      .mainTab {
        width: calc(100% - 80px);
        max-width: 880px;
      }
    }
    .bottomNav {
      right: calc(50vw - 460px);
    }
  }

  @media ${mq.pcMin_gt} {
    .chartWrapper {
      left: calc(50vw - 480px);
    }
  }

  @media ${mq.pcMidium_gt} {
    .postHeader {
      padding-bottom: 20px;
    }
  }
`;
