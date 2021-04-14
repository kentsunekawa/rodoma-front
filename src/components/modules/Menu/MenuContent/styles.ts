import { css } from 'styled-components';

export const base = css`
  position: relative;
  width: 100%;
  height: 100%;
  & > .inner{
    & > .upper{
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      width: 100%;
      height: 240px;
      & > .UserBlock{
        & > p{
          color: #fff;
        }
      }
    }
    & > .menu{
      & > .list{
        & > .item{
          text-align: center;
          margin-bottom: 24px;
        }
      }
    }
  }
  & > .bottom{
    position: absolute;
    left: 0;
    bottom: 25px;
    text-align: center;
    width: 100%;
  }
`;

