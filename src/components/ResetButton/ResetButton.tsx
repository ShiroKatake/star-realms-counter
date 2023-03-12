import React from 'react';
import { FaUndo, FaTimes } from 'react-icons/fa';
import { Button, ResetButtonStyleProps } from './ResetButton.styled';

interface ResetButtonProps extends ResetButtonStyleProps {
  setIsResetting: (value: React.SetStateAction<boolean>) => void
}

export const ResetButton: React.FC<ResetButtonProps> = ({ isResetting, setIsResetting }) => {

  return (
    <Button isResetting={isResetting} onClick={() => setIsResetting(prevState => !prevState)}>
      <FaTimes className='times' />
      <FaUndo className='undo' />
    </Button>
  );
}
