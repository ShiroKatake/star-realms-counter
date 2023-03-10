import { Counter } from "components/Counter/Counter";
import { Column, Grid, Row } from "components/Counter/Counter.styled";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Theme as theme } from "theme";

export const App = () => {
  const [damage, setDamage] = useState(0);
  const [coin, setCoin] = useState(0);
  const [health, setHealth] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>Create React App</h1>
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
