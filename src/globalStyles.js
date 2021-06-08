import { createGlobalStyle } from "styled-components";

import "aos/dist/aos.css";
const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Monsterrat', sans-serif;
    }

    html, body {
        overflow-x: hidden;
    }
    ::selection{
        color: #fff;
        background: #0ff;
    }

    ::placeholder{
        color: #0ff;
    }
`;

export default GlobalStyle;
