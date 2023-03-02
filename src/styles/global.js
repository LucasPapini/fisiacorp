import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

 :root{
    --background: #F5F5FB;
  }

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: var(--background);
  }

  html, body, #root {
    min-height: 100%;
  }

  button {
    cursor: pointer;
  }
`;
