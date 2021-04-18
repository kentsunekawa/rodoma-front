import { css } from 'styled-components';
import { mq } from 'components/style/AppTheme';

export const base = css`
  & > .FollowButton {
    position: fixed;
    right: 20px;
    bottom: 20px;
  }
  & > .PageBase {
    padding-top: 120px;
  }
  .mainTab {
    position: fixed;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    width: calc(100% - 40px);
  }
  .userMain {
    padding-top: 16px;
    & > .editButton {
      position: fixed;
      right: 20px;
      top: 130px;
    }
    & > .catchCopy {
      margin-bottom: 20px;
    }
    & > .icon {
      margin: 25px auto 30px;
    }
    & > .category {
      margin-bottom: 24px;
    }
    & > .description {
      margin-top: 32px;
    }
  }
  .userHeader {
    margin-bottom: 16px;
  }

  @media ${mq.tbMin_gt} {
    .mainTab {
      top: 100px;
      /* width: calc(100% - 80px); */
      max-width: 880px;
    }
    .mainTabContents {
      margin-top: 20px;
    }
    .userMain {
      padding-top: 40px;
      & > .description {
        margin-top: 60px;
      }
    }
    .userHeader {
      margin-bottom: 32px;
    }
  }
`;
