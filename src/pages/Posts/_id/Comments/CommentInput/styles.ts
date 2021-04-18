import { css } from 'styled-components';
import { WithShadow } from 'components/style/Mixins';
import { mq } from 'components/style/AppTheme';

export const base = css`
  display: block;

  & > button {
    display: block;
    width: calc(100% - 40px);
    margin: 0 auto 10px;
    padding: 0;
    text-align: center;
  }
  & > .inner {
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    padding: 0 20px 10px;
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
        color: ${({ theme }) => theme.colors.black};
      }
    }
  }
  @media ${mq.tbMin_gt} {
    & > button {
      margin: 0 auto 20px;
    }
    & > .inner {
      padding: 0 40px 20px;
      & > .TextArea {
        & > .inner {
          height: 100px;
        }
      }
    }
  }
`;
