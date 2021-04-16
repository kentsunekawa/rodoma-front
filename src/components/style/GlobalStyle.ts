import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

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
  }

  html{
    font-size: 62.5%;
    font-family: 'Roboto',"ヒラギノ角ゴ ProN", 'sans-serif';
    font-weight: 300;
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
`;

export default GlobalStyle;
