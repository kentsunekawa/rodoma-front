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
  }

  @media ${mq.tbMin_gt} {
  }
`;
