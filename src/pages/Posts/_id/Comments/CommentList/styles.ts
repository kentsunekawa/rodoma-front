import { css } from 'styled-components';
import { mq } from 'components/style/AppTheme';

export const base = css`
  & > .comment {
    position: relative;
    margin-top: 32px;
    & > .loading {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 5;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      width: 120%;
      height: 150%;
      transform: translate(-50%, -50%);
      background: ${({ theme }) => theme.bg};
      opacity: 0.7;
      & > .IconLoading {
        display: block;
        width: 30px;
      }
    }
  }

  @media ${mq.tbMin_gt} {
    & > .comment {
      padding: 0 30% 0 0;
      margin-top: 48px;
      &.-login {
        padding: 0 0 0 30%;
      }
    }
  }
`;
