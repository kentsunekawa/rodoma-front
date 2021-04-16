import { css } from 'styled-components';

import { Gradient, WithShadow } from 'components/style/Mixins';

export const base = css`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 80;
  width: 100%;
  height: 100vh;
  ${Gradient}
  padding: 130px 20px 30px;
  overflow-y: scroll;
  & > .keywordArea {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    padding: 80px 20px 30px;
    width: 100%;
    .Selector,
    .SearchKeyword {
      ${WithShadow}
    }
  }
  .categoryArea {
  }
`;
