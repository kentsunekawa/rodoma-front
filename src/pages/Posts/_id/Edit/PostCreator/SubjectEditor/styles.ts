import { css } from 'styled-components';

export const base = css`
  .edit {
    padding-bottom: 40px;
  }
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
      color: ${({ theme }) => theme.themeColors.black};
      font-size: 2rem;
      & > .rengeSelector {
        width: 42% !important;
      }
    }
  }
  .bottom {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 5;
    display: flex;
    align-items: flex-end;
    align-content: flex;
    justify-content: center;
    width: 100%;
    padding: 20px 0;
    .desideButton {
      min-width: auto;
      margin: 0 12px 0 0;
      &:last-child {
        margin: 0;
      }
    }
  }
`;
