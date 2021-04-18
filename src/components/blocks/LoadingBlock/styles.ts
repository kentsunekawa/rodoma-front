import { css } from 'styled-components';
import { mq } from 'components/style/AppTheme';

export const base = css`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100px;
  .IconLoading {
    width: 40px;
  }

  @media ${mq.tbMin_gt} {
    height: 160px;
  }
`;
