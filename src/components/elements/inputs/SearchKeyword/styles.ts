import { css } from 'styled-components';

export const base = css`
  position: relative;
  height: 30px;
  border-radius: 15px;
  overflow: hidden;
  background: #fff;
  font-size: 1.6rem;
  & > .input {
    position: relative;
    z-index: 0;
    display: block;
    width: 100%;
    height: 100%;
    padding: 0 1em;
    background: none;
    border: none;
    font-size: inherit;
    &:focus {
      outline: none;
    }
  }
  & > .button {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    height: 100%;
    width: 30px;
    background: #fff;
    & > .icon {
      position: absolute;
      top: 50%;
      right: 0.5em;
      transform: translateY(-50%);
      color: ${({ theme }) => theme.colors.primary};
      font-size: 2rem;
    }
  }
`;
