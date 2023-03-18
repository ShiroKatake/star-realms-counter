import { WindowHeightContext } from 'App';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import { FaUndo } from 'react-icons/fa';
import { Button, Container, DecreasingValue, IncreasingValue, ResetButton, Value } from './Counter.styled';

interface CounterProps {
  className?: string;
  count: number;
  setCount: (value: React.SetStateAction<number>) => void
  isResetting: boolean;
}

interface CancelablePromise extends Promise<void> {
  clear(): void;
}

function setTimeoutAsync(ms: number): CancelablePromise {
  let timeoutId: NodeJS.Timeout;

  const promise = new Promise<void>(resolve => {
    timeoutId = setTimeout(resolve, ms);
  }) as CancelablePromise;

  promise.clear = () => clearTimeout(timeoutId);
  return promise;
}

export const Counter: React.FC<CounterProps> = ({ className, count, setCount, isResetting }) => {
  const [increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(0);
  const [isIncrementing, setIsIncrementing] = useState(false);
  const [isDecrementing, setIsDecrementing] = useState(false);
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  
  const windowWidth = useContext(WindowHeightContext);

  useEffect(() => {
    let msBeforeResetCount = setTimeoutAsync(600);
    let msBeforeFadeOut = setTimeoutAsync(3000);

      const wait = async () => {
        setIsIncrementing(true);

        await msBeforeResetCount;
        setIsIncrementing(false);

        await msBeforeFadeOut;
        setIncrement(0);
      }

      wait();

    return () => {
      msBeforeFadeOut.clear();
      msBeforeResetCount.clear();
    }
  }, [increment, ignored]);

  useEffect(() => {
    let msBeforeResetCount = setTimeoutAsync(600);
    let msBeforeFadeOut = setTimeoutAsync(3000);

    if (decrement > 0) {
      const wait = async () => {
        setIsDecrementing(true);

        await msBeforeResetCount;
        setIsDecrementing(false);

        await msBeforeFadeOut;
        setDecrement(0);
      }

      wait();
    }

    return () => {
      msBeforeFadeOut.clear();
      msBeforeResetCount.clear();
    }
  }, [decrement, ignored]);


  const increase = () => {
    setCount(prevState => prevState + 1);
    setIncrement(prevState => {
      if (!isIncrementing) {
        prevState = 0;
      }
      return prevState + 1;
    });
    forceUpdate();

  }

  const decrease = () => {
    setCount(prevState => prevState - 1);
    setDecrement(prevState => {
      if (!isIncrementing) {
        prevState = 0;
      }
      return prevState + 1;
    });
    forceUpdate();
  }

  const reset = () => {
    setCount(0);
    setIncrement(0);
    setDecrement(0);
  }

  return (
    <Container className={className}>
      <Button windowWidth={windowWidth} onClick={increase}></Button>
      <Button windowWidth={windowWidth} onClick={decrease}></Button>
      {increment > 0 && < IncreasingValue isFading={!isIncrementing}>+{increment}</IncreasingValue>}
      <Value>{count}</Value>
      {decrement > 0 && <DecreasingValue isFading={!isDecrementing}>-{decrement}</DecreasingValue>}
      <ResetButton isResetting={isResetting} onClick={reset}><FaUndo /></ResetButton>
    </Container >
  );
}
