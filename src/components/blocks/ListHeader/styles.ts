import { css } from 'styled-components';
import { mq } from 'components/style/AppTheme';

export const base = css`
  position: relative;
  .titleArea {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    & > .Selector {
      width: 100px;
    }
  }
  & > .breadCrumb {
    margin-top: 10px;
  }
  & > .bottom {
    width: 100%;
    position: absolute;
    left: 0;
    top: 100%;
    padding-top: 15px;
  }

  .keywordArea {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: calc(100% - 100px);
    text-align: center;
    margin: 0 auto;
    & > .keyword {
      display: block;
      max-width: calc(100% - 25px);
      text-align: center;
      font-size: 1.2rem;
      overflow-wrap: break-word;
      color: ${({ theme }) => theme.colors.gray_midium};
      letter-spacing: 0.05em;
      line-height: 1.6em;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      span {
        font-size: 1.4rem;
        font-weight: bold;
        color: inherit;
        letter-spacing: inherit;
        line-height: inherit;
        padding-left: 0.2em;
      }
    }
  }

  .removeKeyword {
    margin-left: 5px;
  }

  @media ${mq.tbMin_gt} {
    & > .breadCrumb {
      margin-top: 20px;
    }
    & > .bottom {
    }

    .keywordArea {
      & > .keyword {
        font-size: 1.4rem;
        span {
          font-size: 1.6rem;
          padding-left: 0.5em;
        }
      }
    }

    .removeKeyword {
      margin-left: 10px;
    }
  }
`;
