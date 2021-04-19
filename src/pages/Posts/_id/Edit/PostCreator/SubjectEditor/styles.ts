import { css } from 'styled-components';

export const base = css`
  .row {
    width: 100%;

    & > .rowLabel {
      display: block;
      width: 100%;
      color: ${({ theme }) => theme.colors.primary};
      font-size: 1.6rem;
      padding-left: 0.2em;
      margin-bottom: 15px;
    }
    &.-renge {
      justify-content: space-between;
      align-items: center;
      align-content: center;
      & > .rengeSelector {
        width: 42% !important;
      }
    }
  }
  .bottom {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    position: relative;
    .deleteButton {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;
