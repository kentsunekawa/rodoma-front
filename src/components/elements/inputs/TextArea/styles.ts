import { css } from 'styled-components';

export const base = css`
  position: relative;
  & > .inner {
    display: block;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 25px;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.themeColors.black};
    font-size: 1.6rem;
    overflow: hidden;
    & > .textarea {
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
      padding: 1em;
      color: inherit;
      font-size: inherit;
      cursor: pointer;
      text-align: left;
      line-height: 1.6em;
      resize: none;
      &:focus {
        outline: none;
      }
    }
  }

  & > .label {
    position: absolute;
    top: 15px;
    left: 1em;
    z-index: 2;
    display: inline-block;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.colors.primary};
    transition: top 0.2s, font-size 0.2s;
    padding: 0.2em 0.3em 0.1em;
    font-size: 1.6rem;
    line-height: 1em;
  }
  &.-inputed > .label,
  & > .inner > .textarea:focus + .label {
    top: -1em;
    font-size: 1.4rem;
  }
`;

export const s = css`
  & > .inner {
    border-radius: 10px;
    & > .textarea {
      padding: 0.5em 1em;
      font-size: 1.6rem;
    }
  }
`;

export const noBorder = css`
  & > .inner {
    border: none;
  }
`;
