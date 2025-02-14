import { useEffect, useState, createContext } from "react";
import { Column, Grid, Row } from "./App.styled";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Theme as theme } from "theme";
import { ResetButton } from "components/ResetButton/ResetButton";
import {
  DamageCounter,
  TradeCounter,
  AuthorityCounter,
} from "components/Counter/Counter.styled";

export const WindowHeightContext = createContext<number>(0);

export const App = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight / 100);
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    const onWindowWidthChange = () => {
      setWindowHeight(window.innerHeight / 100);
    };
    window.addEventListener("resize", onWindowWidthChange);

    return () => {
      window.addEventListener("resize", onWindowWidthChange);
    };
  }, [windowHeight]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <WindowHeightContext.Provider value={windowHeight}>
        <Grid>
          <Row>
            <Column windowWidth={windowHeight}>
              <DamageCounter isResetting={isResetting} />
            </Column>
            <Column windowWidth={windowHeight}>
              <TradeCounter isResetting={isResetting} />
            </Column>
          </Row>
          <Row>
            <Column windowWidth={windowHeight}>
              <AuthorityCounter isResetting={isResetting} />
            </Column>
          </Row>
        </Grid>
        <ResetButton
          isResetting={isResetting}
          setIsResetting={setIsResetting}
        />
      </WindowHeightContext.Provider>
    </ThemeProvider>
  );
};
