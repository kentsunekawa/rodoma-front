import { css } from 'styled-components';

export const base = css`
  display: flex;
  justify-content: flex-end;
  & > .button {
    margin-left: 8px;
    &.-mark {
      &.-active {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
    &.-like {
      &.-active {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
    .IconLoading {
      display: block;
      width: 15px;
    }
  }
`;
