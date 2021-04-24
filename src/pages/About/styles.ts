import { css } from 'styled-components';
import { WithShadow, Gradient } from 'components/style/Mixins';
import { mq } from 'components/style/AppTheme';

export const base = css`
  & > .inner {
    background: #fff;
  }

  padding-top: 60px;

  .About__box {
    &:nth-of-type(even) {
      background: #f0f0f0;
    }
  }
  .SectionBox {
    display: flex;
    flex-wrap: wrap;
    .SectionBox__inner {
      width: 100%;
      max-width: 960px;
      padding: 64px 20px;
      margin: 0 auto;
    }
    .SectionBox__imageArea {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      align-content: center;
      width: 100%;
    }
    .SectionBox__image {
      position: relative;
      z-index: 1;
      width: 48%;
      overflow: hidden;
      border-radius: 10px;
      ${WithShadow};
      &:before {
        content: '';
        display: block;
        padding-top: 204%;
      }
      video {
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
        display: block;
        width: 100%;
      }
    }
    .SectionBox__title {
      width: calc(52% - 32px);
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.primary};
      line-height: 1.4em;
      span {
        display: block;
        font-size: 80%;
      }
    }
    .SectionBox__main {
      margin-top: 48px;
      .SectionBox__title {
        display: none;
      }
      p {
        font-size: 1.4rem;
        line-height: 1.8em;
        margin-bottom: 16px;
        letter-spacing: 0.02em;
      }
    }
    .SectionBox__section {
      margin-top: 24px;
    }
    .SectionBox__sectionTitle {
      font-size: 1.4rem;
      line-height: 1.8em;
      font-weight: bold;
      margin-bottom: 4px;
      letter-spacing: 0;
      color: ${({ theme }) => theme.colors.primary};
    }
    &.-left {
      .SectionBox__image {
        order: 1;
        margin-right: 32px;
      }
      .SectionBox__title {
        order: 2;
        text-align: left;
      }
    }
    &.-right {
      .SectionBox__image {
        order: 2;
        margin-left: 32px;
      }
      .SectionBox__title {
        order: 1;
        text-align: right;
      }
    }
  }

  .Outro {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    padding: 56px 0;
    ${Gradient};
    .Outro__title {
      font-size: 2rem;
      color: #fff;
      display: block;
      width: 100%;
      text-align: center;
      margin-bottom: 32px;
    }
  }

  @media ${mq.tbMin_gt} {
    .SectionBox {
      .SectionBox__inner {
        display: flex;
        flex-wrap: wrap;
        padding: 120px 40px;
      }
      .SectionBox__imageArea {
        align-content: flex-start;
        width: 240px;
        .SectionBox__title {
          display: none;
        }
      }
      .SectionBox__image {
        width: 180px;
        margin: 0 !important;
      }
      .SectionBox__main {
        width: calc(100% - 240px);
        margin-top: 0;
        .SectionBox__title {
          display: flex;
          justify-content: flex-start;
          align-items: flex-end;
          align-content: flex-end;
          width: 100%;
          margin-bottom: 32px;
          span {
            margin-left: 16px;
          }
        }
      }
      &.-left {
        .SectionBox__imageArea {
          order: 1;
          justify-content: flex-start;
        }
        .SectionBox__main {
          order: 2;
        }
      }
      &.-right {
        .SectionBox__imageArea {
          justify-content: flex-end;
          order: 2;
        }
        .SectionBox__main {
          order: 1;
        }
      }
    }
    .Outro {
      .Outro__title {
        width: auto;
        margin: 0 40px 0 0;
      }
    }
  }

  @media ${mq.pcMin_gt} {
    .SectionBox {
      .SectionBox__imageArea {
        width: 300px;
      }
      .SectionBox__main {
        width: calc(100% - 300px);
      }
      .SectionBox__image {
        width: 240px;
      }
    }
  }
`;
