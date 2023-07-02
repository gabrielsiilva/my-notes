import { createGlobalStyle } from "styled-components";

// Supports weights 100-900
import '@fontsource-variable/inter';

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background: #E6E8EC;
        box-sizing: border-box;
        font-family: 'Inter Variable', sans-serif;
        font-weight: 500;
        line-height: normal;

        display: flex;
        align-items: center;
        justify-content: center;
        
        height: 100vh;
        width: 100vw;
  }
`

export default GlobalStyles;