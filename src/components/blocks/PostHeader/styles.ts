import { css } from 'styled-components';
import { mq } from 'components/style/AppTheme';

export const base = css`
  & > .inner {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px;
    & > .iconArea {
      width: 90px;
    }
    & > .info {
      position: relative;
      width: calc(100% - 100px);
      & > .linkToEdit {
        position: absolute;
        right: 0;
        top: 0;
        transform: translate(30%, -30%);
      }
      & > .title {
        display: block;
        width: 100%;
        height: 2.8em;
        margin-bottom: 8px;
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
    & > .date {
      width: 100%;
      font-size: 1rem;
      color: ${({ theme }) => theme.themeColors.gray_midium};
      padding-top: 0.8em;
    }
  }

  @media ${mq.tbMin_gt} {
    & > .inner {
      padding: 30px 40px;
      margin: 0 auto;
      width: 100%;
      max-width: 960px;
      & > .iconArea {
        width: 130px;
      }
      & > .info {
        width: calc(100% - 250px);
        & > .title {
          margin-bottom: 24px;
        }
        & > .linkToEdit {
          transform: translate(100%, -30%);
        }
      }
      & > .date {
        padding-top: 1.4em;
      }
    }
  }

  @media ${mq.pcMidium_gt} {
    & > .inner {
      padding-top: 60px;
    }
  }
`;
