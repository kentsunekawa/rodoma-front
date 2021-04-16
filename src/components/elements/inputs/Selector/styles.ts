import { css } from 'styled-components';

export const base = css`
  position: relative;
  display: block;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  height: 50px;
  border-radius: 25px;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.themeColors.black};
  font-size: 1.5rem;
  & > .select {
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
    padding: 0 1.5em 0 1em;
    color: inherit;
    font-size: inherit;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
  & > .icon {
    position: absolute;
    z-index: 0;
    top: 50%;
    right: 0.3em;
    transform: translateY(-50%);
    font-size: inherit;
    color: ${({ theme }) => theme.colors.primary};
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
    padding: 0.2em 0.3em;
  }
  &.-selected > .label,
  & > .select:focus + .label {
    top: -0.2em;
    font-size: 80%;
  }
  &.-disabled {
    opacity: 0.5;
  }
`;

export const l = css`
  height: 50px;
  border-radius: 25px;
  font-size: 1.8rem;
`;

export const s = css`
  height: 30px;
  border-radius: 15px;
  font-size: 1.6rem;
  & > .select {
    padding: 0 1em 0 0.5em;
    line-height: 26px;
  }
`;

export const primary = css`
  color: ${({ theme }) => theme.colors.primary};
`;
