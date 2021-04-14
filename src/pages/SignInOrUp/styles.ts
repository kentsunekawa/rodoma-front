import { css } from 'styled-components';
// import {
//   Gradient,
//   WithShadow,
//   AspectFix,
//   AbsCenterMiddle,
//   ButtonTapAction
// } from '../style/Mixins';

export const base = css`
  .tab{
    margin-bottom: 30px;
  }
  .signinButton,
  .signupButton{
    margin: 30px auto 0;
  }

  .SignInOrUp__bottom{
    text-align: center;
    margin-top: 30px;
  }

  .CoverContent{
    & > .content{
      width: 240px;
    }
  }
`;

