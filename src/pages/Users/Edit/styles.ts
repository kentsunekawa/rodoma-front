import { css } from 'styled-components';

export const base = css`
  .main {
    padding-bottom: 80px;
    & > .iconArea {
      display: flex;
      justify-content: center;
      padding: 30px 0 50px;
      & > .icon {
        position: relative;
        & > .iconChangeButton {
          position: absolute;
          right: 0;
          top: 0;
          z-index: 1;
        }
      }
    }

    & > .row {
      position: relative;
      margin-bottom: 40px;
      & > .caption {
        position: absolute;
        right: 0;
        bottom: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        align-content: center;
        width: 100%;
        font-size: 1.2rem;
        padding: 0.4em;
        color: ${({ theme }) => theme.colors.error};
        svg {
          display: block;
          width: 1em;
          margin-right: 0.2em;
        }
        &.-verified {
          color: ${({ theme }) => theme.colors.gray_midium};
        }
      }
      & > .label {
        font-size: 1.6rem;
        display: block;
        margin-bottom: 15px;
        color: ${({ theme }) => theme.colors.primary};
        padding-left: 0.2em;
      }
      &.-category {
        width: 80%;
        margin: 0 auto 40px;
        .Selector {
          margin-bottom: 20px;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }

    & > .bottom {
      position: fixed;
      left: 50%;
      bottom: 20px;
      transform: translateX(-50%);
      z-index: 50;
      width: auto;
      width: calc(100% - 40px);
      & > .saveButton {
        margin: 0 auto;
        width: 100%;
      }
    }
  }
`;
