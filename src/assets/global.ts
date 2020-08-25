import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  a {
    color: #ffffff;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .container {
    z-index: 999999;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    /* max-width: 1360px; */
  }

  .row {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    z-index: 99;
  }

  .column {
    flex-basis: calc(calc(800px - 100%) * 999);
    padding: 10px;
    flex-grow: 1;
    flex-shrink: 1;
    span {
      border: 1px solid #ffffff;
      display: flex
    }
  }

  .dcolumn {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .h-100 {
    height: 100%;
    max-height: 100%;
  }
`

export default GlobalStyles
