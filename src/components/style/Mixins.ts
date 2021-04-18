import { css, keyframes } from 'styled-components';
import { COLORS } from './AppTheme';

export const Gradient = css`
  background: linear-gradient(45deg, ${COLORS.primary}, ${COLORS.secondary});
`;

export const Gradient_success = css`
  /* background: linear-gradient(-225deg, #2cd8d5 0%, #6b8dd6 48%, #8e37d7 100%); */
  background: linear-gradient(to right, #02aab0, #00cdac);
`;

export const Gradient_error = css`
  background: linear-gradient(to right, #ff416c, #ff4b2b);
`;

export const AspectFix = css<{ aspectWidth?: number; aspectHeight?: number }>`
  position: relative;
  &:before {
    content: '';
    display: block;
    padding-top: ${(props) =>
      ((props.aspectWidth ? props.aspectWidth : 1) /
        (props.aspectHeight ? props.aspectHeight : 1)) *
      100}%;
  }
`;

export const AbsCenterMiddle = css`
  position: relative;
  & > .inner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const WithShadow = css`
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
`;

export const ButtonTapAction = css`
  transition: 0.2s transform;
  &:active {
    transform: translateY(10%);
  }
  &.-disabled {
    &:active {
      transform: none;
    }
  }
`;

export const LogoDraw = keyframes`
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 634;
  }
`;
