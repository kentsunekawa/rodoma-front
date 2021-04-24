import { css } from 'styled-components';
import { mq } from 'components/style/AppTheme';

export const base = css`
  .postsListHeader {
    margin-bottom: 15px;
  }
  .createButton {
    position: fixed;
    left: 20px;
    bottom: 20px;
    z-index: 30;
  }

  @media ${mq.pc_gt} {
    .createButton {
      left: calc(50vw - 480px);
      bottom: 40px;
    }
  }

  @media ${mq.pcLarge_gt} {
    .createButton {
      left: calc(50vw - 632px);
      bottom: 40px;
    }
  }
`;
