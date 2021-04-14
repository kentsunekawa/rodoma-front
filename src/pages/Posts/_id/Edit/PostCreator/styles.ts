import { css } from 'styled-components';

export const base = css`
  & > .modal{
    &.-summary{
      & > .mask{
        & > .panel{
          & > .inner{
            padding: 0;
          }
        }
      }
    }
    .desideButton{
        margin: 0 auto;
      }
    .row{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 40px;
      .TextArea,
      .TextInput,
      .Selector{
        width: 100%;

      }
      &:last-child{
        margin-bottom: 0; 
      }
    }
  }
  .postHeader{
    position: fixed;
    left: 0;
    top: 60px;
    z-index: 20;
    background: ${({theme}) => theme.bg};
    width: 100%;
  }
  .chartWrapper{
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 50;
    width: 100%;
    height: 40vh;
    transition: height .2s ease-out;
  }
  .summaryEditButton{
    margin: 0 auto;
    width: calc(100% - 40px);
  }
  .bottomNav{
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    padding-bottom: 20px
  }

  .GunttChart{
    & > .wrapper{
      & > .inner{
        & > .main{
          padding-bottom: 80px;
        }
      }
    }
  }
`;