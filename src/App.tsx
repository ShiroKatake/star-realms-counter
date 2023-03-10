import { ThemeProvider } from "styled-components";
import { GlobalStyle, Theme as theme } from "theme";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>Create React App</h1>
    </ThemeProvider>
  );
};
