import { css } from 'styled-components';
import { Gradient } from 'components/style/Mixins';
import { mq } from 'components/style/AppTheme';

export const base = css`
  display: inline-block;
  height: 26px;
  border-radius: 13px;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.themeColors.gray_midium};
  border: 1px solid ${({ theme }) => theme.themeColors.gray_midium};

  & > .inner {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0 1em;
    &.-withIcon {
      padding: 0 0.2em;
      & > .icon {
        width: 20px;
        font-size: 1.8rem;
      }
    }
    & > .text {
      font-size: 1.2rem;
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      /* padding-top: 0.1em; */
      height: 100%;
      line-height: 26px;
    }
  }
  @media ${mq.tbMin_gt} {
    height: 24px;
    border-radius: 12px;
    & > .inner {
      & > .text {
        line-height: 24px;
        font-size: 1.2rem;
      }
    }
  }
`;

export const primary = css`
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.gray_primary};
  background: ${({ theme }) => theme.bg};
`;

export const success = css`
  border: 1px solid ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.success};
  background: ${({ theme }) => theme.bg};
`;

export const error = css`
  border: 1px solid ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.error};
  background: ${({ theme }) => theme.bg};
`;

export const gradient = css`
  ${Gradient}
  color: ${({ theme }) => theme.colors.white};
  border: none;
`;

export const s = css`
  height: 22px !important;
  & > .inner {
    & > .text {
      font-size: 1.2rem;
      line-height: 22px;
    }
  }
  @media ${mq.tbMin_gt} {
    & > .inner {
      & > .text {
        font-size: 1rem;
      }
    }
  }
`;

export const simple = css`
  background: rgba(255, 255, 255, 0.8);
  border: none;
  color: ${({ theme }) => theme.colors.black};
`;
