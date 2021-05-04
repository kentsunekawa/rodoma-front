import { css } from 'styled-components';
import {
  Gradient,
  Gradient_midiumGray,
  WithShadow,
  AspectFix,
  AbsCenterMiddle,
  ButtonTapAction,
} from 'components/style/Mixins';

export const base = css`
  display: block;
  width: 42px;
  border-radius: 50%;
  font-size: 2.2rem;
  color: #fff;
  & > .inner {
    font-size: inherit;
    color: inherit;
    & > svg {
      display: block;
      margin: 0 auto;
    }
  }
  &.-disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  ${AspectFix};
  ${AbsCenterMiddle};
  ${ButtonTapAction};
`;

export const xxs = css`
  width: 20px;
  font-size: 1rem;
`;

export const xs = css`
  width: 25px;
  font-size: 1.3rem;
`;

export const s = css`
  width: 30px;
  font-size: 1.8rem;
`;

export const m = css`
  width: 42px;
  font-size: 2.2rem;
`;

export const l = css`
  width: 62px;
  font-size: 3rem;
`;

export const gray_light = css`
  background: ${({ theme }) => theme.colors.gray_light};
  ${WithShadow}
`;

export const gray_midium = css`
  background: ${({ theme }) => theme.colors.gray_midium};
  ${WithShadow}
`;

export const gray_dark = css`
  background: ${({ theme }) => theme.colors.gray_dark};
  ${WithShadow}
`;

export const gradient = css`
  ${Gradient}
  ${WithShadow}
`;

export const gradient_midiumGray = css`
  ${Gradient_midiumGray}
  ${WithShadow}
`;

export const primary = css`
  background: ${({ theme }) => theme.colors.primary};
  ${WithShadow}
`;

export const secondary = css`
  background: ${({ theme }) => theme.colors.secondary};
  ${WithShadow}
`;

export const posi = css`
  color: ${({ theme }) => theme.colors.black};
`;

export const outline = css`
  border: 2px solid #fff;
`;
