import { css } from 'styled-components';
import { Gradient, WithShadow } from 'components/style/Mixins';

export const base = css`
  & > .list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    height: 100%;
    & > .item {
      height: 100%;
      & > .button {
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-content: center;
        align-items: center;
        cursor: pointer;
      }
    }
  }
`;

export const rounded = css`
  height: 40px;
  border-radius: 20px;
  ${Gradient}
  ${WithShadow}
  & > .list {
    & > .item {
      border-right: 1px solid #fff;
      &:last-child {
        border-right: none;
      }
      & > .button {
        font-size: 2.5rem;
        color: #fff;
        svg {
          opacity: 0.5;
          transform: scale(0.8);
          transition: transform 0.2s, opacity 0.2s;
        }
        &.-selected {
          svg {
            opacity: 1;
            transform: scale(1);
          }
        }
        &:hover {
          svg {
            opacity: 1;
          }
        }
      }
    }
  }
`;

export const switcher = css`
  height: 32px;
  border-radius: 16px;
  ${Gradient}
  ${WithShadow}
  & > .list {
    & > .item {
      &.-selected {
        position: relative;
        &:before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 0;
          transform: translate(-50%, -50%);
          display: block;
          width: calc(100% - 10px);
          height: 32px;
          border-radius: 17px;
          background: ${({ theme }) => theme.bg};
        }
      }
      & > .button {
        position: relative;
        color: #fff;
        font-size: 1.6rem;
        &.-selected {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
`;

export const simple = css`
  & > .list {
    & > .item {
      & > .button {
        font-size: 3rem;
        color: ${({ theme }) => theme.colors.gray_light};
        &.-selected {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
`;
