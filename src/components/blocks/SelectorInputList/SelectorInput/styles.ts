import { css } from 'styled-components';

export const base = css`
  display: flex;
  justify-content: space-between;
  & > .selector{
    width: 100px;
  }

  & > .input{
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    width: calc(100% - 105px);
    & > .textInput{
      width: 100%;
    }
    & > .deleteButton{
      width: 25px;
      margin-left: 5px;
    }
  }
`;

export const primary = css``;

