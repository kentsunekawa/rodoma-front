import { css } from 'styled-components';

import { Gradient_success, Gradient_error } from 'components/style/Mixins';

export const base = css`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding: 10px 0;
  & > .icon {
    align-items: center;
    align-content: center;
    justify-content: center;
    width: 80px;
    font-size: 3rem;
    color: #fff;
  }
  & > .message {
    color: #fff;
    font-size: 1.4rem;
    width: calc(100% - 120px);
    line-height: 1.4em;
  }
  & > .button {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    width: 50px;
  }
`;

export const error = css`
  ${Gradient_error}/* background: ${({ theme }) => theme.colors.error}; */
`;

export const success = css`
  ${Gradient_success}/* background: ${({ theme }) => theme.colors.success}; */
`;
