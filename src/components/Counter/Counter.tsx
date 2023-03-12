import { WindowHeightContext } from 'App';
import React, { useContext, useEffect, useState } from 'react';
import { FaUndo } from 'react-icons/fa';
import { Button, Container, DecreasingValue, IncreasingValue, ResetButton, Value } from './Counter.styled';

interface CounterProps {
  className?: string;
  count: number;
  setCount: (value: React.SetStateAction<number>) => void
  isResetting: boolean;
}

function timeoutAsync(delay: number) {
  return new Promise(res => setTimeout(res, delay));
}

export const Counter: React.FC<CounterProps> = ({ className, count, setCount, isResetting }) => {
  const [increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(0);
  const [isIncrementing, setIsIncrementing] = useState(false);
  const [isDecrementing, setIsDecrementing] = useState(false);

  const windowWidth = useContext(WindowHeightContext);

  useEffect(() => {
    let timeout = setTimeout(() => '', 1000);
    if (increment > 0) {
      const wait = async () => {
        setIsIncrementing(true);
        await timeoutAsync(50);

        setIsIncrementing(false);
        timeout = setTimeout(() => {
          setIncrement(0);
        }, 2200);
      }

      wait();
    }

    return () => {
      clearTimeout(timeout);
    }
  }, [increment]);

  useEffect(() => {
    let timeout = setTimeout(() => '', 1000);
    if (decrement > 0) {
      const wait = async () => {
        setIsDecrementing(true);
        await timeoutAsync(50);

        setIsDecrementing(false);
        timeout = setTimeout(() => {
          setDecrement(0);
        }, 2200);
      }

      wait();
    }

    return () => {
      clearTimeout(timeout);
    }
  }, [decrement]);


  const increase = () => {
    setCount(prevState => prevState + 1);
    setIncrement(increment + 1);
  }

  const decrease = () => {
    setCount(prevState => prevState - 1);
    setDecrement(decrement + 1);
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <Container className={className}>
      <Button windowWidth={windowWidth} onClick={increase}></Button>
      <Button windowWidth={windowWidth} onClick={decrease}></Button>
      {increment > 0 && <IncreasingValue isFading={!isIncrementing}>+{increment}</IncreasingValue>}
      <Value>{count}</Value>
      {decrement > 0 && <DecreasingValue isFading={!isDecrementing}>-{decrement}</DecreasingValue>}
      <ResetButton isResetting={isResetting} onClick={reset}><FaUndo /></ResetButton>
    </Container>
  );
}
