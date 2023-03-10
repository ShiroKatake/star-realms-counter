import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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
    min-height: 100vh;
    font-family: ${(props: any) => props.theme.typography.defaultFamily};
    font-size: 16px;
    color: ${(props: any) => props.theme.colors.white};
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    background: ${(props: any) => props.theme.colors.primary200};
  }
`;
