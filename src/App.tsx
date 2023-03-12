import { useState } from "react";
import { Column, Grid, Row } from "./App.styled";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Theme as theme } from "theme";
import { ResetButton } from "components/ResetButton/ResetButton";
import { DamageCounter, TradeCounter, AuthorityCounter } from "components/Counter/Counter.styled";

export const App = () => {
  const [damage, setDamage] = useState(0);
  const [trade, setTrade] = useState(0);
  const [authority, setAuthority] = useState(0);

  const [isResetting, setIsResetting] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Grid>
        <Row>
          <Column>
            <DamageCounter
              count={damage}
              setCount={setDamage}
              isResetting={isResetting}
            />
          </Column>
          <Column>
            <TradeCounter
              count={trade}
              setCount={setTrade}
              isResetting={isResetting}
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <AuthorityCounter
              count={authority}
              setCount={setAuthority}
              isResetting={isResetting}
            />
          </Column>
        </Row>
      </Grid>
      <ResetButton
        isResetting={isResetting}
        setIsResetting={setIsResetting}
      />
    </ThemeProvider>
  );
};
