import { css } from 'styled-components';
// import {
//   Gradient,
//   WithShadow,
//   AspectFix,
//   AbsCenterMiddle,
//   ButtonTapAction
// } from 'components/style/Mixins';

export const base = css`
  & > .CoverContent{
    & > .content{
      width: 240px;
      .Paragraph{
        margin-bottom: 40px;
      }
      .row{
        margin-bottom: 40px;
      }
      .RoundButton {
        margin: 60px auto 0;
      }
    }
  }
`;