import { WindowHeightContext } from "App";
import React, { useContext, useReducer, useRef, useState } from "react";
import { FaUndo } from "react-icons/fa";
import {
  Button,
  Container,
  IncrementalValue,
  ResetButton,
  Value,
} from "./Counter.styled";

interface CounterProps {
  className?: string;
  isResetting: boolean;
}

interface State {
  count: number;
  amountChanged: number;
}

interface Action {
  type: "update" | "reset";
  amount?: number;
  isCounting?: boolean;
}

const reducer = (state: State, action: Action) => {
  if (!action.isCounting) state.amountChanged = 0;
  switch (action.type) {
    case "update": {
      const newCount = state.count + (action.amount ?? 0);
      const amountChanged = state.amountChanged + (action.amount ?? 0);
      return { count: newCount, amountChanged: amountChanged };
    }
    case "reset":
      return { count: 0, amountChanged: 0 };
    default:
      return { count: state.count, amountChanged: 0 };
  }
};

export const Counter: React.FC<CounterProps> = ({ className, isResetting }) => {
  const [isInitialised, setIsInitialised] = useState(false);
  const [state, dispatch] = useReducer(reducer, { count: 0, amountChanged: 0 });
  const [isCounting, setIsCounting] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const windowWidth = useContext(WindowHeightContext);
  const fadeTimer = useRef<NodeJS.Timeout>();
  const resetChangeTimer = useRef<NodeJS.Timeout>();

  const resetCooldown = () => {
    setIsInitialised(true);
    setIsCounting(true);
    setIsFading(false);
    clearTimeout(fadeTimer.current);
    fadeTimer.current = setTimeout(() => {
      setIsFading(true);
    }, 600);
    clearTimeout(resetChangeTimer.current);
    resetChangeTimer.current = setTimeout(() => {
      setIsCounting(false);
    }, 2000);
  };

  return (
    <Container className={className}>
      <Button
        windowWidth={windowWidth}
        onClick={() => {
          resetCooldown();
          dispatch({ type: "update", amount: 1, isCounting });
        }}
        onLongPress={() => {
          resetCooldown();
          dispatch({ type: "update", amount: 10, isCounting });
        }}
      />
      <Button
        windowWidth={windowWidth}
        onClick={() => {
          resetCooldown();
          dispatch({ type: "update", amount: -1, isCounting });
        }}
        onLongPress={() => {
          resetCooldown();
          dispatch({ type: "update", amount: -10, isCounting });
        }}
      />
      <Value>{state.count}</Value>
      {isInitialised ? (
        <IncrementalValue isFading={isFading}>
          {state.amountChanged > 0
            ? `+${state.amountChanged}`
            : `${state.amountChanged}`}
        </IncrementalValue>
      ) : null}
      <ResetButton
        isResetting={isResetting}
        onClick={() => dispatch({ type: "reset" })}
      >
        <FaUndo />
      </ResetButton>
    </Container>
  );
};
