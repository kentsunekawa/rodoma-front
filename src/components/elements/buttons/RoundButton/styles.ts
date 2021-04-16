import { css } from 'styled-components';
import { Gradient, ButtonTapAction, WithShadow } from 'components/style/Mixins';

export const base = css`
  position: relative;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 0 1em;
  height: 40px;
  border-radius: 20px;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  background: #fff;
  .icon {
    position: absolute;
    top: 50%;
    right: 0.3em;
    transform: translateY(-50%);
    display: block;
    font-size: 150%;
  }
  ${WithShadow}
  ${ButtonTapAction}
  &.-disabled {
    opacity: 0.5;
  }
`;

export const s = css`
  height: 30px;
  border-radius: 15px;
  font-size: 1.2rem;
`;

export const m = css`
  height: 40px;
  border-radius: 20px;
  font-size: 1.5rem;
`;

export const l = css`
  height: 60px;
  border-radius: 30px;
  padding: 0 2em;
  font-size: 2rem;
`;

export const gray_light = css`
  background: ${({ theme }) => theme.colors.gray_light};
  color: #fff;
`;

export const gray_midium = css`
  background: ${({ theme }) => theme.colors.gray_midium};
  color: #fff;
`;

export const gray_dark = css`
  background: ${({ theme }) => theme.colors.gray_dark};
  color: #fff;
`;

export const gradient = css`
  ${Gradient}
  color: #fff;
`;

export const nega = css`
  color: #fff;
`;

export const withIcon = css`
  padding: 0 2.5em;
`;
