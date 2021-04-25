import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { mq } from 'components/style/AppTheme';

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    overflow-wrap:  break-word;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    *:before,
    *:after{
      box-sizing: border-box;
    }
  }

  html{
    font-size: 62.5%;
    font-family: 'Roboto',"ヒラギノ角ゴ ProN", 'sans-serif';
    font-weight: 300;
    letter-spacing: .06em;
  }
  body{
    background: ${({ theme }) => theme.bg};
    font-size: 1em;
    font-family: inherit;
    transition: background-color .1s linear;
  }

  a{
    cursor: pointer;
    text-decoration: none;
  }


  img,
  svg{
    display: block;
    width: 100%;
  }

  button{
    border: none;
    background: none;
    &:focus{
      outline: none;
    }
  }

  @media ${mq.tbMin_gt} {
    button {
      cursor: pointer;
      transition: transform .2s linear, opacity .5s linear;
      &:hover {
        transform: translateY(2%);
        opacity: .8;
      }
    }
    a{
      cursor: pointer;
      &:hover{
        opacity: .8;
        transition: opacity .2s linear;
      }
    }
  }
`;

export default GlobalStyle;
