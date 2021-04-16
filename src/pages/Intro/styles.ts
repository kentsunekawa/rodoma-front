import { css } from 'styled-components';

export const base = css`
  & > .skipButton {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 210;
    color: ${({ theme }) => theme.colors.gray_midium};
  }
  .CoverContent {
    & > .content {
      width: 80%;
    }
  }
  .logo {
    width: 80px;
    margin: 0 auto 30px;
  }
`;
