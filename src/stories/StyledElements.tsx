import Styled from 'styled-components';

export const Wrapper = Styled.div`
  & > .component{
    margin-bottom: 30px;
    & > .label{
      font-size: 1.8rem;
      color: #555;
      display: block;
      text-align: left;
      padding: 10px;
      border-bottom: 1px solid #ddd;
      margin-bottom: 20px;
    }
    & > .row{
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-content: flex-start;
      align-items: flex-start;
      width: 100%;
      margin-bottom: 10px;
      & > .item{
        padding: 10px;
        &.-nega{
          background: #333;
        }
        &.-gray{
          background: #ddd;
        }
        &.-width30Per{
          width: 30%;
        }
        &.-width20Per{
          width: 20%;
        }
      }
      &.-alignMiddle{
        align-content: center;
        align-items: center;
      }
      &.-alignBottom{
        align-content: flex-end;
        align-items: flex-end;
      }
    }
  }
`;
