import { css } from 'styled-components';
import { mq } from 'components/style/AppTheme';

export const base = css`
  width: 100%;
  padding: 80px 20px 40px;
  & > .inner {
    width: 100%;
    margin: 0 auto;
  }

  @media ${mq.spLarge_gt} {
    padding: 100px 40px 40px;
  }

  @media ${mq.tbMin_gt} {
    & > .inner {
      max-width: 880px;
    }
  }

  @media ${mq.pcMidium_gt} {
    padding: 120px 40px 40px;
  }

  @media ${mq.pcLarge_gt} {
    padding: 120px 40px 40px;
    & > .inner {
      max-width: 1200px;
    }
  }
`;
