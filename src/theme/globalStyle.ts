import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-family: "Barlow Condensed";
    font-size: 16px;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
  }

  html,
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
    padding: 0;
  }

  body {
    color: ${(props: any) => props.theme.colors.text};
    background: ${(props: any) => props.theme.colors.background};
  }
`;
