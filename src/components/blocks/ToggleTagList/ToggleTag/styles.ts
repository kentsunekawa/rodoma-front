import { css } from 'styled-components';

export const base = css`
  position: relative;
  display: inline-block;
  height: 30px;
  border-radius: 15px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.bg};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  &:hover {
    cursor: pointer;
  }
  & > .inner {
    position: relative;
    z-index: 1;
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0 2em 0 0.8em;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
  }
  & > .icon {
    position: absolute;
    top: 50%;
    right: 5px;
    z-index: 0;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    font-size: inherit;
  }
`;
