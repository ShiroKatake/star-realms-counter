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

  const [incrementUpdate, forceUpdateIncrement] = useReducer(x => x + 1, 0);
  const [decrementUpdate, forceUpdateDecrement] = useReducer(x => x + 1, 0);
  
  const windowWidth = useContext(WindowHeightContext);

  const increase = () => {
    setCount(prevCount => prevCount + 1);
    setIncrement(prevIncrement => {
      if (!isIncrementing) {
        prevIncrement = 0;
      }
      return prevIncrement + 1;
    });
    forceUpdateIncrement();
  }

  const decrease = () => {
    setCount(prevCount => prevCount - 1);
    setDecrement(prevDecrement => {
      if (!isDecrementing) {
        prevDecrement = 0;
      }
      return prevDecrement + 1;
    });
    forceUpdateDecrement();
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
        ignored={incrementUpdate}
      >
        +{increment}
      </IncreasingValue>}
      <Value>{count}</Value>
      {decrement > 0 && <DecreasingValue
        setIncrementCounter={setDecrement}
        setIsCounting={setIsDecrementing}
        isCounting={isDecrementing}
        ignored={decrementUpdate}
      >
        -{decrement}
      </DecreasingValue>}
      <ResetButton isResetting={isResetting} onClick={reset}><FaUndo /></ResetButton>
    </Container >
  );
}
