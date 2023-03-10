import { Counter } from "components/Counter/Counter";
import { Column, Grid, Row } from "./App.styled";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Theme as theme } from "theme";

export const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Grid>
        <Row>
          <Column>
            <Counter />
          </Column>
          <Column>
            <Counter />
          </Column>
        </Row>
        <Row>
          <Column>
            <Counter />
          </Column>
        </Row>
      </Grid>
    </ThemeProvider>
  );
};
