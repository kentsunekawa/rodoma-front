import { css } from 'styled-components';

export const base = css`
  position: relative;
  padding: 40px 20px 80px;
  & > .link{
    position: absolute;
    right: 60px;
    top: 20px;
    z-index: 5;
  }
  & > .title{
    margin-bottom: 30px;
  }
`;