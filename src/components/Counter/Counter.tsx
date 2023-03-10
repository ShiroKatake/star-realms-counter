import React, { useState } from 'react';
import { Button, Container, Value } from './Counter.styled';

export const Counter: React.FC = () => {
  const [value, setValue] = useState(0);

  return (
    <Container>
      <Button onClick={() => setValue(value + 1)}></Button>
      <Value>{value}</Value>
      <Button onClick={() => setValue(value - 1)}></Button>
    </Container>
  );
}
