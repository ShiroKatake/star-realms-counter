import { WindowHeightContext } from 'App';
import React, { useContext, useReducer, useState } from 'react';
import { FaUndo } from 'react-icons/fa';
import { Button, Container, DecreasingValue, IncreasingValue, ResetButton, Value } from './Counter.styled';

interface CounterProps {
  className?: string;
  count: number;
  setCount: (value: React.SetStateAction<number>) => void
  isResetting: boolean;
}

export const Counter: React.FC<CounterProps> = ({ className, count, setCount, isResetting }) => {
  const [increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(0);

  const [isIncrementing, setIsIncrementing] = useState(false);
  const [isDecrementing, setIsDecrementing] = useState(false);

  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const [ignored1, forceUpdate1] = useReducer(x => x + 1, 0);
  
  const windowWidth = useContext(WindowHeightContext);

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
      if (!isDecrementing) {
        prevState = 0;
      }
      return prevState + 1;
    });
    forceUpdate1();
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
      {increment > 0 && <IncreasingValue
        setIncrementCounter={setIncrement}
        setIsCounting={setIsIncrementing}
        isCounting={isIncrementing}
        ignored={ignored}
      >
        +{increment}
      </IncreasingValue>}
      <Value>{count}</Value>
      {decrement > 0 && <DecreasingValue
        setIncrementCounter={setDecrement}
        setIsCounting={setIsDecrementing}
        isCounting={isDecrementing}
        ignored={ignored1}
      >
        -{decrement}
      </DecreasingValue>}
      <ResetButton isResetting={isResetting} onClick={reset}><FaUndo /></ResetButton>
    </Container >
  );
}
