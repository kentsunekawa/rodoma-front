import { css } from 'styled-components';

export const base = css`
  .userSearch {
    width: 100%;
  }
  .bottom {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    width: 100%;
  }
  &.-limited {
    padding-bottom: 64px;
    .bottom {
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 5;
      display: flex;
      align-items: center;
      align-content: center;
      justify-content: center;
      width: 100%;
      padding: 20px 0;
      &:after {
        content: '';
        display: block;
        width: 180px;
        height: 60px;
        border-radius: 30px;
        position: absolute;
        left: 50%;
        top: 20px;
        z-index: -1;
        transform: translateX(-50%);
        background: ${({ theme }) => theme.darkBg};
      }
    }
  }
`;
