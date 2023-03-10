import React, { useState } from 'react';

export const Counter: React.FC = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <button onClick={() => setValue(value + 1)}></button>
      <div>{value}</div>
      <button onClick={() => setValue(value - 1)}></button>
    </div>
  );
}
