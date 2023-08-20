'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    color: rgb(var(--foreground-rgb));
    background: var(--dark-blue);
    font-family: var(--font);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .container {
    max-width: var(--max-width);
    margin: 0 auto;
  }
`;

export default GlobalStyle;
