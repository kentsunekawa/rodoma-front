import { css } from 'styled-components';

export const base = css`
  display: block;
  font-size: 1.4rem;
  line-height: 1.6em;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.themeColors.black};
`;

export const inline = css`
  display: inline;
`;

export const caption = css`
  font-size: 1.2rem;
`;

export const bigTitle = css`
  font-size: 3rem;
  letter-spacing: 0.05;
`;

export const title = css`
  font-size: 2rem;
`;

export const subTitle = css`
  font-size: 1.8rem;
  line-height: 1.4em;
`;

export const text = css`
  font-size: 1.4rem;
`;

export const bold = css`
  font-weight: bold;
`;

export const alignLeft = css`
  text-align: left;
`;

export const alignRight = css`
  text-align: right;
`;

export const center = css`
  text-align: center;
`;

export const primary = css`
  color: ${({ theme }) => theme.colors.primary};
`;

export const nega = css`
  color: #fff;
`;
