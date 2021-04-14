import { css } from 'styled-components';
// import {
//   Gradient,
//   WithShadow,
//   AspectFix,
//   AbsCenterMiddle,
//   ButtonTapAction
// } from 'components/style/Mixins';

export const base = css`
  .listMessage{
    display: block;
    text-align: center;
    font-size: 1.2rem;
    color: ${({theme}) => theme.themeColors.gray_midium};
    padding: 10px 0;
  }
  & > .num{
      margin-bottom: 10px;
      & > .numText{
        display: flex;
        justify-content: flex-end;
        align-content: center;
        align-items: center;
        width: 50px;
        margin-left: auto;
        padding-right: .5em;
        font-size: 1.2rem;
        text-align: right;
        color: ${({theme}) => theme.themeColors.gray_midium};
        letter-spacing: .05em;
        line-height: 1.6em;
        span{
          font-size: 1.4rem;
          font-weight: bold;
          color: inherit;
          letter-spacing: inherit;
          line-height: inherit;
          padding-left: .2em;
        }
      }
    }
`;
