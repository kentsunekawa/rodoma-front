import { css } from 'styled-components';

export const base = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  & > .name {
    display: block;
    text-align: center;
    color: ${({ theme }) => theme.themeColors.black};
    padding: 0 0.5em;
  }
  & > .icon {
    position: relative;
    width: 34px;
    & > .button {
      position: absolute;
      right: 0;
      top: 0;
      z-index: 1;
    }
  }
`;

export const iconLeft = css`
  flex-wrap: nowrap;
  & > .name {
    order: 2;
  }
  & > .icon {
    order: 1;
  }
`;

export const iconRight = css`
  flex-wrap: nowrap;
  & > .name {
    order: 1;
  }
  & > .icon {
    order: 2;
  }
`;

export const alignCenter = css`
  justify-content: center;
  & > .name {
    width: 100%;
    margin-top: 0.5em;
  }
`;

export const s = css`
  & > .icon {
    width: 34px;
  }
  & > .name {
    font-size: 1.2rem;
  }
`;

export const m = css`
  & > .icon {
    width: 56px;
  }
  & > .name {
    margin-top: 0.2em;
    font-size: 1.4rem;
  }
`;

export const l = css`
  & > .icon {
    width: 128px;
  }
  & > .name {
    font-size: 1.6rem;
  }
`;
