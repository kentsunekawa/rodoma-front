import { css } from 'styled-components';

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
    left: 20px;
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
    & > .snsList {
      margin-bottom: 20px;
    }
  }
  .userHeader {
    margin-bottom: 16px;
  }
`;
