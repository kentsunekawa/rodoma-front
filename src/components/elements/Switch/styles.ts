import { css } from 'styled-components';
import { WithShadow } from 'components/style/Mixins';

export const base = css`
  & > label {
    & > input {
      display: none;
    }
    & > .rail {
      position: relative;
      display: block;
      width: 35px;
      height: 14px;
      & > .bg {
        width: 100%;
        height: 100%;
        border-radius: 7px;
        overflow: hidden;
        background: ${({ theme }) => theme.colors.gray_dark};
        box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.1) inset;
        &:after {
          content: '';
          display: block;
          width: 100%;
          height: 100%;
          background: ${({ theme }) => theme.colors.primary};
          transition: width 0.2s ease-in-out;
          box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.1) inset;
        }
      }
      & > span {
        position: absolute;
        display: block;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: #fff;
        top: 50%;
        left: 50%;
        transform: translate(0%, -50%);
        transition: transform 0.2s ease-in-out;
        ${WithShadow}
      }
    }
    & > input:checked {
      & + .rail {
        & > .bg {
          &:after {
            width: 0;
          }
        }
        & > span {
          transform: translate(-100%, -50%);
        }
      }
    }
  }
`;

export const primary = css``;
