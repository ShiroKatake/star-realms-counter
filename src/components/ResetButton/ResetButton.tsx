import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { GoThreeBars } from 'react-icons/go';
import { Button, ResetButtonStyleProps } from './ResetButton.styled';

interface ResetButtonProps extends ResetButtonStyleProps {
  setIsResetting: (value: React.SetStateAction<boolean>) => void
}

export const ResetButton: React.FC<ResetButtonProps> = ({ isResetting, setIsResetting }) => {

  return (
    <Button isResetting={isResetting} onClick={() => setIsResetting(prevState => !prevState)}>
      <FaTimes className='times' />
      <GoThreeBars className='menu' />
    </Button>
  );
}
