import { css } from 'styled-components';

export const base = css`
  .row{
    & > .rowLabel{
      display: block;
      width: 100%;
      text-align: left;
      color: ${({theme}) => theme.colors.primary};
      font-size: 1.6rem;
      padding-left: .2em;
      margin-bottom: 15px;
    }
    &.-renge{
      justify-content: space-between;
      align-items: center;
      align-content: center;
      & > .rengeSelector{
        width: 42% !important;
      }
    }
  }
`;