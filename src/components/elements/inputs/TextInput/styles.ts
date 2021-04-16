import { css } from 'styled-components';

export const base = css`
  position: relative;
  & > .inner {
    display: block;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    height: 50px;
    border-radius: 25px;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.themeColors.black};
    font-size: 1.6rem;
    overflow: hidden;
    & > .input {
      position: relative;
      z-index: 1;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      display: block;
      background: none;
      border: none;
      width: 100%;
      height: 100%;
      padding: 0 1em;
      color: inherit;
      font-size: inherit;
      cursor: pointer;
      text-align: left;
      &:focus {
        outline: none;
      }
    }
  }

  & > .label {
    position: absolute;
    top: 50%;
    left: 1em;
    transform: translateY(-50%);
    z-index: 2;
    display: inline-block;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.colors.primary};
    transition: top 0.2s, font-size 0.2s;
    padding: 0.2em 0.3em 0.1em;
    font-size: 1.5rem;
    line-height: 1em;
  }
  &.-inputed > .label,
  & > .inner > .input:focus + .label {
    top: -0.3em;
    font-size: 1.4rem;
  }
`;

export const l = css`
  & > .inner {
    height: 50px;
    border-radius: 25px;
    font-size: 1.6rem;
  }
  & > .label {
    font-size: 1.4rem;
  }
`;

export const s = css`
  & > .inner {
    height: 30px;
    border-radius: 15px;
    font-size: 1.6rem;
  }
  & > .label {
    font-size: 1.4rem;
  }
`;
