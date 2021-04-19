import { css } from 'styled-components';
import { mq } from 'components/style/AppTheme';

export const base = css`
  & > .followButton {
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
  .confirmModal {
    .row {
      text-align: center;
      margin-bottom: 40px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .desideButton {
      margin: 0 auto;
    }
  }
  @media ${mq.tbMin_gt} {
    .mainTab {
      top: 100px;
      width: calc(100% - 80px);
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
      & > .editButton {
        top: 160px;
        right: 40px;
      }
    }
    .userHeader {
      margin-bottom: 32px;
    }
  }

  @media ${mq.pcMin_gt} {
    .userMain {
      & > .editButton {
        right: calc(50vw - 440px);
      }
    }
    .followButton {
      right: calc(50vw - 440px);
      bottom: auto;
      top: 160px;
    }
  }
`;
