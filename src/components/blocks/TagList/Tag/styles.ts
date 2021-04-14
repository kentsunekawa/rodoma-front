import { css } from 'styled-components';
import {
  Gradient
} from 'components/style/Mixins';

export const base = css`
  display: inline-block;
  height: 24px;
  border-radius: 12px;
  background: ${({theme}) => theme.bg};
  color: ${({theme}) => theme.themeColors.gray_midium};
  border: 1px solid ${({theme}) => theme.themeColors.gray_midium};
  & > .inner{
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0 1em;
    &.-withIcon{
      padding: 0 .2em;
      & > .icon{
        width: 20px;  
        font-size: 1.8rem;
      }
    }
    & > .text{
      display: block;
      padding-top: .1em;
    }
  }
`;

export const primary = css`
  color: ${({theme}) => theme.colors.primary};
  border: 1px solid ${({theme}) => theme.colors.gray_primary};
  background: ${({theme}) => theme.bg};
`;

export const success = css`
  border: 1px solid ${({theme}) => theme.colors.success};
  color: ${({theme}) => theme.colors.success};
  background: ${({theme}) => theme.bg};
`;

export const error = css`
  border: 1px solid ${({theme}) => theme.colors.error};
  color: ${({theme}) => theme.colors.error};
  background: ${({theme}) => theme.bg};
`;

export const gradient = css`
  ${Gradient}
  color: ${({theme}) => theme.colors.white};
  border: none;
`;

// export const outline = css`
//   color: ${({theme}) => theme.colors.primary};
//   border: 1px solid ${({theme}) => theme.colors.primary};
// `;

