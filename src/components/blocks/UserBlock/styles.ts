import { css } from 'styled-components';
import { mq } from 'components/style/AppTheme';

export const base = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  & > .name {
    display: block;
    text-align: center;
    line-height: 1.4em;
    color: ${({ theme }) => theme.themeColors.black};
    padding: 0 0.5em;
    font-size: 1.4rem;
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
  @media ${mq.tbMin_gt} {
    & > .name {
      padding: 0 1em;
      font-size: 1.6srem;
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
  @media ${mq.tbMin_gt} {
    & > .name {
      margin-top: 16px;
    }
  }
`;

export const s = css`
  & > .icon {
    width: 34px;
  }
  & > .name {
    font-size: 1.2rem;
  }
  @media ${mq.tbMin_gt} {
    & > .name {
      font-size: 1.4rem;
    }
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
  @media ${mq.tbMin_gt} {
    & > .name {
      font-size: 1.6rem;
    }
  }
`;

export const l = css`
  & > .icon {
    width: 128px;
  }
  & > .name {
    font-size: 1.6rem;
  }
  @media ${mq.tbMin_gt} {
    & > .name {
      font-size: 1.8rem;
    }
  }
`;
