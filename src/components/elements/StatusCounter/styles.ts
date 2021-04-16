import { css } from 'styled-components';

export const base = css`
  display: inline-block;
  .inner {
    display: flex;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
  }
  .icon {
    font-size: 2rem;
    margin-right: 0.2em;
  }
  .num {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.themeColors.black};
  }
`;

export const like = css`
  .icon {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
export const mark = css`
  .icon {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
