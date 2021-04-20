import { css } from 'styled-components';

import { Gradient, WithShadow } from 'components/style/Mixins';

export const base = css`
  .panel {
    padding: 20px;
    border-radius: 5px;
    ${Gradient}
    ${WithShadow}
    & > .message {
      margin-top: 20px;
    }
  }
  .numMessage {
    padding: 0.5em 0;
  }
  .userCheckList {
    margin-top: 20px;
    max-height: 200px;
    overflow-y: scroll;
  }

  .listArea {
    margin-top: 16px;
    .item {
      width: 100%;
      margin-bottom: 8px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;
