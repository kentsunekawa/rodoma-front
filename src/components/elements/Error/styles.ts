import { css } from 'styled-components';

import { Gradient } from 'components/style/Mixins';

export const base = css`
  position: relative;
  z-index: 10;
  width: 100%;
  & > .text {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
    width: 100%;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.2rem;
    line-height: 1em;
    padding: 0.5em 0.5em 0 0.5em;
    & > button {
      display: flex;
      align-items: center;
      align-content: center;
      height: 20px;
      padding: 2px;
      color: #fff;
      margin-left: 5px;
      font-size: 1.2rem;
      padding: 0.2em 0.6em 0.1em;
      border-radius: 10px;
      ${Gradient};
    }
  }
  & > .box {
    position: absolute;
    top: 0.5em;
    right: 0;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 7px 15px 6px 6px;
    border-radius: 8px;
    color: #fff;
    ${Gradient}
    & > .close {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(50%, -50%);
    }
    & > .message {
      display: block;
      width: 100%;
      color: ${({ theme }) => theme.colors.primary};
      font-size: 1.2rem;
      line-height: 1em;
      margin-bottom: 8px;
      color: #fff;
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
`;

export const nega = css`
  color: #fff;
`;

export const bottom = css`
  top: -100%;
`;
