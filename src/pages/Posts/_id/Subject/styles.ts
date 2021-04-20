import { css } from 'styled-components';
import { mq } from 'components/style/AppTheme';

export const base = css`
  position: relative;
  padding: 40px 20px 80px;
  & > .link {
    position: absolute;
    right: 60px;
    top: 20px;
    z-index: 5;
  }
  & > .title {
    margin-bottom: 30px;
  }
  @media ${mq.tbMin_gt} {
    padding: 56px 40px 80px;
  }
`;
