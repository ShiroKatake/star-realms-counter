import React, { useState, useEffect } from 'react';

interface LongPressButtonProps {
  className?: string
  children?: React.ReactNode;
  onLongPress: () => void;
  onClick: () => void;
}

export const LongPressButton = ({
  className,
  children,
  onLongPress,
  onClick,
}: LongPressButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isLongPressed, setIsLongPressed] = useState<boolean | null>(null);

  useEffect(() => {
    let timerId: any;
    if (isPressed) {
      timerId = setInterval(() => {
        setIsLongPressed(true);
        onLongPress();
      }, 750);
    } else {
      isLongPressed === false && onClick();
      setIsLongPressed(false);
      clearInterval(timerId);
    }
    return () => clearTimeout(timerId);
  }, [isPressed]);

  return (
    <button
      className={className}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
    >
      {children}
    </button>
  );
};
