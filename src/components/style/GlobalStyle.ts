import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { mq } from 'components/style/AppTheme';

const GlobalStyle = createGlobalStyle`
  /* ${reset} */

  /*! destyle.css v2.0.2 | MIT License | https://github.com/nicolas-cusan/destyle.css */

  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
  }

  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    -webkit-tap-highlight-color: transparent; /* 3*/
  }

  body {
    margin: 0;
  }

  main {
    display: block;
  }

  p,
  table,
  blockquote,
  address,
  pre,
  iframe,
  form,
  figure,
  dl {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    margin: 0;
  }
  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }


  dt {
    font-weight: bold;
  }

  dd {
    margin-left: 0;
  }

  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
    border-top-width: 1px;
    margin: 0;
    clear: both;
    color: inherit;
  }

  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: inherit; /* 2 */
  }

  address {
    font-style: inherit;
  }
  a {
    background-color: transparent;
    text-decoration: none;
    color: inherit;
  }
  abbr[title] {
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: inherit; /* 2 */
  }

  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img,
  embed,
  object,
  iframe {
    vertical-align: bottom;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    -webkit-appearance: none;
    appearance: none;
    vertical-align: middle;
    color: inherit;
    font: inherit;
    background: transparent;
    padding: 0;
    margin: 0;
    outline: 0;
    border-radius: 0;
    text-align: inherit;
  }

  [type="checkbox"] {
    -webkit-appearance: checkbox;
    appearance: checkbox;
  }

  [type="radio"] {
    -webkit-appearance: radio;
    appearance: radio;
  }

  button,
  input {
    /* 1 */
    overflow: visible;
  }

  button,
  select {
    /* 1 */
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
  }

  button[disabled],
  [type="button"][disabled],
  [type="reset"][disabled],
  [type="submit"][disabled] {
    cursor: default;
  }
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  select::-ms-expand {
    display: none;
  }

  option {
    padding: 0;
  }

  fieldset {
    margin: 0;
    padding: 0;
    min-width: 0;
  }

  legend {
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    outline-offset: -2px; /* 1 */
  }


  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  label[for] {
    cursor: pointer;
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  [contenteditable] {
    outline: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  caption {
    text-align: left;
  }

  td,
  th {
    vertical-align: top;
    padding: 0;
  }

  th {
    text-align: left;
    font-weight: bold;
  }
  template {
    display: none;
  }

  [hidden] {
    display: none;
  }

  *{
    box-sizing: border-box !important;
    padding: 0;
    margin: 0;
    overflow-wrap:  break-word;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    *:before,
    *:after{
      box-sizing: border-box !important;
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
