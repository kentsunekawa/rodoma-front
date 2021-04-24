import { css } from 'styled-components';
import { mq } from 'components/style/AppTheme';

export const base = css`
  & > .modal {
    & > .mask {
      & > .panel {
        & > .inner {
          position: relative;
        }
      }
    }
    &.-summary {
      & > .mask {
        & > .panel {
          & > .inner {
            padding: 0;
          }
        }
      }
    }
    .row {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 40px;
      .TextArea,
      .TextInput,
      .Selector {
        width: 100%;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .postHeader {
    position: fixed;
    left: 0;
    top: 60px;
    z-index: 20;
    background: ${({ theme }) => theme.bg};
    width: 100%;
  }
  .chartWrapper {
    position: fixed;
    bottom: 0;
    left: 50%;
    z-index: 50;
    width: 100%;
    max-width: 960px;
    height: 40vh;
    transition: height 0.2s ease-out;
    transform: translateX(-50%);
  }
  .summaryEditButton {
    margin: 0 auto;
    width: calc(100% - 40px);
  }
  .bottomNav {
    position: fixed;
    bottom: 0;
    left: 50%;
    z-index: 60;
    padding-bottom: 20px;
    width: 100%;
    max-width: 400px;
    transform: translateX(-50%);
  }

  .GunttChart {
    & > .wrapper {
      & > .inner {
        & > .main {
          padding-bottom: 80px;
        }
      }
    }
  }
  @media ${mq.tbMin_gt} {
    .summaryEditButton {
      width: calc(100% - 80px);
      max-width: 880px;
    }
    .postHeader {
      padding-bottom: 10px;
    }
  }
  @media ${mq.pcMidium_gt} {
    .postHeader {
      padding-bottom: 20px;
    }
  }
`;
