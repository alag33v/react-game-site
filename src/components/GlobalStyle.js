import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /*
   * 1. Correct the line height in all browsers.
   * 2. Prevent adjustments of font size after orientation changes in iOS.
  */
  
  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }
  
  /* Remove the margin in all browsers. */
  
  body {
    margin: 0;
    overflow-x: hidden;
  }
  
  /* Render the \`main\` element consistently in IE. */
  
  main {
    display: block;
  }
  
  /*
   * Correct the font size and margin on \`h1\` elements within \`section\` and
   * \`article\` contexts in Chrome, Firefox, and Safari.
  */
  
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  
  /* Remove the gray background on active links in IE 10. */
  
  a {
    background-color: transparent;
  }
  
  /* Add the correct font weight in Chrome, Edge, and Safari. */
  
  b,
  strong {
    font-weight: bolder;
  }
  
  /* Remove the border on images inside links in IE 10. */
  
  img {
    border-style: none;
  }

  /*
   * 1. Change the font styles in all browsers.
   * 2. Remove the margin in Firefox and Safari.
  */
  
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }
  
  /*
   * Show the overflow in IE.
   * 1. Show the overflow in Edge.
  */
  
  button,
  input { /* 1 */
    overflow: visible;
  }
  
  /*
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
  */
  
  button,
  select { /* 1 */
    text-transform: none;
  }
  
  /* Correct the inability to style clickable types in iOS and Safari. */
  
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
  
  /* Remove the inner border and padding in Firefox. */
  
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  
  /* Restore the focus styles unset by the previous rule. */
  
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  
  /* Remove the default vertical scrollbar in IE 10+. */
  
  textarea {
    overflow: auto;
  }
  
  /*
   * 1. Add the correct box sizing in IE 10.
   * 2. Remove the padding in IE 10.
  */
  
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }
  
  /* Correct the cursor style of increment and decrement buttons in Chrome. */
  
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  
  /* Universal Box Sizing. */
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  html {
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: darkgray;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
      background-color: #fff;
    }
  }
  
  body {
    font-family: 'Roboto Mono', sans-serif;
  }
  
  h2 {
    font-family: 'Nerko One', cursive;
    font-size: 46px;
    font-weight: 400;
    color: #333;
  }
  
  h3 {
    font-size: 24px;
    color: #333;
  }
  
  p {
    font-size: 18px;
    line-height: 1.5;
    color: #696969;
  }
  
  a {
    text-decoration: none;
    color: #333;
  }
`

export default GlobalStyle