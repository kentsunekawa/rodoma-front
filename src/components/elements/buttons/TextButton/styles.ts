import { css } from 'styled-components';

export const base = css`
  display: inline-block;
  font-size: 1.5rem;
  padding: .5em 0;
  color: ${({theme}) => theme.themeColors.black};
  & > .icon{
    position: absolute;
    display: block;
    top: 50%;
    transform: translateY(-50%);
    color: inherit;
    font-size: inherit;
  }
`;

export const s = css`
  font-size: 1.4rem;
`;

export const m = css`
  font-size: 1.6rem;
`;

export const l = css`
  font-size: 1.8rem;
`;

export const primary = css`
  color: ${({theme}) => theme.colors.primary};
`;

export const nega = css`
  color: ${({theme}) => theme.themeColors.white};
`;

export const gray_midium = css`
  color: ${({theme}) => theme.themeColors.gray_midium};
`;

export const withIconRight = css`
  position: relative;
  padding-right: 1.5em;
  & > .icon{
    right: 0;
  }
`;

export const block = css`
  display: block;
`;

export const alignCenter = css`
  text-align: center;
`;
