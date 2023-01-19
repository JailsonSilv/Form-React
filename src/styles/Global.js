import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'poppins', sans-serif;
        background-color: azure;
    }

    body {
        width: 100vw;
        height: 100vw;
        display: flex;
    }

    #root {
        width: 100%;
    }
`;

export default Global;