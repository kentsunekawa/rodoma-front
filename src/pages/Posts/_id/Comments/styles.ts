import { css } from 'styled-components';
import { mq } from 'components/style/AppTheme';

export const base = css`
  & > .inner {
    padding: 20px 20px 0;
    & > .scrollableArea {
      padding-bottom: 90px;
    }
    & > .inputArea {
      position: fixed;
      left: 50%;
      bottom: 0;
      z-index: 10;
      transform: translateX(-50%);
      width: 100%;
      max-width: 960px;
    }
  }
  .CommentList {
    width: 100%;
  }

  @media ${mq.tbMin_gt} {
    & > .inner {
      padding: 0 40px 40px;
    }
  }
`;
