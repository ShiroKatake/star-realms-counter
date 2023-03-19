import React, { useEffect } from 'react';
import { setTimeoutAsync } from 'utils/setTimeoutAsync';
import { IncrementalValue } from './IncrementCounter.styled';

interface IncrementCounterProps {
  className?: string;
  setIncrementCounter: (value: number) => void;
  isCounting: boolean;
  children: React.ReactNode;
  setIsCounting: (value: boolean) => void;
  ignored: number
}

export const IncrementCounter: React.FC<IncrementCounterProps> = ({ className, setIncrementCounter, setIsCounting, ignored, isCounting, children }) => {
  useEffect(() => {
    let msBeforeResetCount = setTimeoutAsync(600);
    let msBeforeFadeOut = setTimeoutAsync(3000);

    const wait = async () => {
      setIsCounting(true);

      await msBeforeResetCount;
      setIsCounting(false);

      await msBeforeFadeOut;
      setIncrementCounter(0);
    }

    wait();

    return () => {
      msBeforeFadeOut.clear();
      msBeforeResetCount.clear();
    }
  }, [setIsCounting, setIncrementCounter, ignored]);
  
  return (
    <IncrementalValue className={className} isFading={!isCounting}>{children}</IncrementalValue>
  );
}
