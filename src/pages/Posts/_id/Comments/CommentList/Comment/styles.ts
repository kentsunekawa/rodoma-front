import { css } from 'styled-components';
import { Gradient, WithShadow } from 'components/style/Mixins';

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
    background: linear-gradient(45deg, #d9d9d9, #fff);
    border-radius: 5px;
    ${WithShadow}
    padding: 10px 14px;
    font-size: 1.4rem;
    line-height: 1.6em;
    letter-spacing: 0.08em;
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
