import { css } from 'styled-components';
import { Gradient, Gradient_gray, WithShadow } from 'components/style/Mixins';
import { mq } from 'components/style/AppTheme';

export const base = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
  & > .icon {
    width: 40px;
  }
  & > .comment {
    position: relative;
    width: calc(100% - 50px);
    ${Gradient_gray}
    border-radius: 5px;
    ${WithShadow}
    padding: 10px 14px;
    font-size: 1.4rem;
    line-height: 1.6em;
    letter-spacing: 0.08em;
    pre {
      overflow: auto;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
    & > .userName {
      display: block;
      font-size: 1rem;
      line-height: 1em;
      text-align: right;
      margin-top: 15px;
      color: ${({ theme }) => theme.colors.gray_midium};
    }
    & > .date {
      position: absolute;
      bottom: 100%;
      right: 0;
      color: ${({ theme }) => theme.colors.gray_midium};
      font-size: 1rem;
    }
    & > .button {
      position: absolute;
      left: 0;
      top: 0;
      transform: translate(-50%, -50%);
    }
  }
  @media ${mq.tbMin_gt} {
    & > .comment {
      padding: 16px 16px;
      & > .userName {
        font-size: 1.2rem;
      }
      & > .date {
        font-size: 1.2rem;
        padding: 0.2em 0;
      }
    }
  }
`;

export const login = css`
  & > .comment {
    order: 1;
    color: #fff;
    ${Gradient}
    & > .userName {
      color: #fff;
    }
  }
  & > .icon {
    order: 2;
  }
`;
