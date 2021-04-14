import { css } from 'styled-components';

export const base = css`
  & > .list{
    display: flex;
    justify-content: center;
    & > .item{
      width: 40px;
      margin: 0 8px;
      & > .link{
        display: block;
        color: ${({theme}) => theme.themeColors.gray_dark};
        font-size: 2.5rem;
      }
    }
  }
`;
