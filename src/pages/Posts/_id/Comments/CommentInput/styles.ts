import { css } from 'styled-components';
import { WithShadow } from 'components/style/Mixins';

export const base = css`
  display: block;

  & > button {
    display: block;
    width: calc(100% - 40px);
    margin: 0 auto 10px;
    padding: 20px 0;
    text-align: center;
  }
  & > .inner {
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    padding: 10px 20px;
    & > .CircleButton {
      .IconLoading {
        width: 30px;
      }
    }
    & > .TextArea {
      width: calc(100% - 70px);
      & > .inner {
        ${WithShadow}
        background: #fff;
      }
    }
  }
`;
