import Styled from 'styled-components';
import { Gradient } from 'components/style/Mixins';

export const Wrapper = Styled.div`
  &.-gradient {
    ${Gradient}
  }
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
        &.-icon{
          svg{
            display: block;
            width: 1em;
            font-size: 3rem;
          }
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

export const SampleButton = Styled.button`
  display: block;
  padding: 10px;
  font-size: 1.4rem;
  margin: 5px;
  background: #efefef;
  border-radius: 5px;
`;
