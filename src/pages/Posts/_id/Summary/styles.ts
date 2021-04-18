import { css } from 'styled-components';
import { mq } from 'components/style/AppTheme';

export const base = css`
  & > .inner {
    padding: 20px 20px 40px;
    & > .title {
      margin-bottom: 24px;
    }
  }

  @media ${mq.tbMin_gt} {
    & > .inner {
      padding: 20px 40px 40px;
    }
  }
`;
