import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.ts";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        
        color: ${theme.colors.primaryFont};
        line-height: 1.2;
        
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    
    a {
        text-decoration: none;
        color: ${theme.colors.primaryFont};
    }
    
    ul {
        list-style: none;
    }
    
    li {
        list-style-type: none;
    }
    
    button {
        background-color: unset;
        border: none;
    }
    
    section, footer {
        background-color: ${theme.colors.secondaryBg};
    }

    section:not(section section) {
        &:nth-child(n + 2) {
            padding: 140px 0 0;
        }
    }
    
    h2 {
        font-weight: 700;
        font-size: 32px;
    }
    
    h3 {
        font-weight: 500;
        font-size: 18px;
    }
    
    p, span {
        font-size: 15px;
        line-height: 24px;
    }
    
    p {
        color: ${theme.colors.secondaryFont};
    }
    
    label {
        font-weight: 500;
        font-size: 18px;
        color: ${theme.colors.secondaryFont};
    }
    
    img {
        display: block;
    }
    
    input, textarea {
        border: none;
        background-color: ${theme.colors.secondaryBg};
        resize: none;
        padding: 8px;
        font-size: 20px;
        color: ${theme.colors.primaryFont};
    }
`;