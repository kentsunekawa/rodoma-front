import { css } from 'styled-components';
import { Gradient, WithShadow } from 'components/style/Mixins';
import { mq } from 'components/style/AppTheme';

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
    padding: 80px 20px 0;
    margin: 0 auto;
    width: 100%;
    .queryInput {
      width: 100%;
      max-width: 689px;
      margin: 0 auto;
    }
    .Selector,
    .SearchKeyword {
      ${WithShadow}
    }
  }
  & > .inner {
    margin: 0 auto;
    max-width: 689px;
  }

  @media ${mq.tbMin_gt} {
    padding: 200px 40px 30px;
    & > .keywordArea {
      padding: 130px 40px 0;
    }
  }
`;
