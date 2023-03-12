import { useEffect, useState, createContext } from "react";
import { Column, Grid, Row } from "./App.styled";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Theme as theme } from "theme";
import { ResetButton } from "components/ResetButton/ResetButton";
import { DamageCounter, TradeCounter, AuthorityCounter } from "components/Counter/Counter.styled";

export const WindowHeightContext = createContext<number>(0);

export const App = () => {
  const [windowHeight, setWindowWidth] = useState(window.innerHeight / 100);
  const [damage, setDamage] = useState(0);
  const [trade, setTrade] = useState(0);
  const [authority, setAuthority] = useState(0);

  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    console.log(windowHeight * 100);
    const onWindowWidthChange = () => { setWindowWidth(window.innerHeight / 100) }
    window.addEventListener('resize', onWindowWidthChange);

    return () => {
      window.addEventListener('resize', onWindowWidthChange);
    }
  }, [windowHeight])


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <WindowHeightContext.Provider value={windowHeight}>
        <Grid>
          <Row>
            <Column windowWidth={windowHeight}>
              <DamageCounter
                count={damage}
                setCount={setDamage}
                isResetting={isResetting}
              />
            </Column>
            <Column windowWidth={windowHeight}>
              <TradeCounter
                count={trade}
                setCount={setTrade}
                isResetting={isResetting}
              />
            </Column>
          </Row>
          <Row>
            <Column windowWidth={windowHeight}>
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
      </WindowHeightContext.Provider>
    </ThemeProvider>
  );
};
