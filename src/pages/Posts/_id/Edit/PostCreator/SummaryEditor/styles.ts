import { css } from 'styled-components';
import { mq } from 'components/style/AppTheme';

export const base = css`
  .cover {
    position: relative;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    background-size: cover;
    background-position: center;
    &:before {
      content: '';
      display: block;
      padding-top: 50%;
    }
    .button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
      max-width: 270;
    }
  }
  .main {
    padding: 32px;
  }
  .categorySelector {
    margin-bottom: 20px;
  }
  @media ${mq.tbMin_gt} {
    .cover {
      &::before {
        padding-top: 30%;
      }
    }
  }
`;
