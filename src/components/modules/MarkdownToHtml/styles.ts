import { css } from 'styled-components';

export const base = css`
  color: ${({ theme }) => theme.themeColors.black};
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }

  a:visited {
    color: ${({ theme }) => theme.colors.primary};
  }
  a:hover {
    opacity: 0.8;
  }
  a:active {
    opacity: 0.8;
  }
  a:focus {
    outline: thin dotted;
  }
  a:hover,
  a:active {
    outline: 0;
  }

  ::-moz-selection {
    background: rgba(255, 255, 0, 0.3);
    color: #000;
  }
  ::selection {
    background: rgba(255, 255, 0, 0.3);
    color: #000;
  }

  a::-moz-selection {
    background: rgba(255, 255, 0, 0.3);
    color: #0645ad;
  }
  a::selection {
    background: rgba(255, 255, 0, 0.3);
    color: #0645ad;
  }

  p {
    color: inherit;
    margin: 0 0 1em 0;
    font-size: 1.6rem;
    line-height: 1.8em;
  }

  img {
    max-width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
    color: inherit;
    line-height: 1.4em;
  }
  h4,
  h5,
  h6 {
    font-weight: bold;
  }
  h1 {
    font-size: 2.8rem;
    margin: 24px 0;
    margin-bottom: 24px;
  }
  h2 {
    font-size: 2.6rem;
    padding: 8px 0;
    margin-bottom: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.themeColors.gray_pale};
  }
  h3 {
    font-size: 2.2rem;
    padding-top: 8px;
    margin-bottom: 8px;
  }
  h4 {
    font-size: 2rem;
    padding: 8px 0;
    margin-bottom: 8px;
  }
  h5 {
    font-size: 1.8rem;
    padding: 8px 0;
    margin-bottom: 8px;
  }
  h6 {
    font-size: 1.6rem;
    padding: 8px 0;
    margin-bottom: 8px;
  }

  blockquote {
    padding-left: 3em;
    margin: 0;
    color: ${({ theme }) => theme.themeColors.gray_midium};
    border-left: 0.5em #eee solid;
  }

  hr {
    padding: 0;
    margin: 1em 0;
    display: block;
    height: 2px;
    border: 0;
    border-top: 1px solid ${({ theme }) => theme.themeColors.gray_midium};
  }

  pre,
  code,
  kbd,
  samp {
    color: inherit;
    font-size: 1.6rem;
    background: ${({ theme }) => theme.themeColors.gray_pale};
    line-height: 1.6em;
    padding: 0.1em 0.4em;
  }

  pre {
    code {
      padding: 0;
    }
    white-space: pre;
    white-space: pre-wrap;
    word-wrap: break-word;
    padding: 0.5em 1em;
  }

  em {
    font-style: italic;
  }

  b,
  strong {
    font-weight: bold;
  }

  dfn {
    font-style: italic;
  }

  ins {
    background: #ff9;
    color: #000;
    text-decoration: none;
  }

  mark {
    background: #ff0;
    color: #000;
    font-style: italic;
    font-weight: bold;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sup {
    top: -0.5em;
  }
  sub {
    bottom: -0.25em;
  }

  ul,
  ol {
    margin: 1em 0;
    padding: 0 0 0 2em;
    font-size: 1.6rem;
    line-height: 1.8em;
  }
  ul {
    list-style: disc;
  }
  ol {
    list-style: decimal;
  }
  li p:last-child {
    margin: 0;
  }
  dd {
    margin: 0 0 0 2em;
  }

  img {
    border: 0;
    -ms-interpolation-mode: bicubic;
    vertical-align: middle;
    width: auto;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    border: 1px solid ${({ theme }) => theme.themeColors.gray_light};
    margin-bottom: 16px;
    thead {
      tr {
        border-bottom: 1px solid ${({ theme }) => theme.themeColors.gray_light};
        background: none;
      }
    }
    tbody {
      tr {
        &:nth-of-type(odd) {
          background: ${({ theme }) => theme.themeColors.gray_pale};
        }
      }
    }
    th {
      padding: 8px 16px;
      font-size: 1.4rem;
      border-right: 1px solid ${({ theme }) => theme.themeColors.gray_light};
      &:last-child {
        border-right: none;
      }
    }
    td {
      vertical-align: top;
      padding: 8px 16px;
      font-size: 1.4rem;
      border-right: 1px solid ${({ theme }) => theme.themeColors.gray_light};
      &:last-child {
        border-right: none;
      }
    }
  }

  @media only screen and (min-width: 480px) {
    body {
      max-width: 100%;
      font-size: 14px;
    }
  }

  @media only screen and (min-width: 768px) {
    body {
      max-width: 42em;
      font-size: 16px;
    }
  }
`;
