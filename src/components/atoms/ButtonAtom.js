import React from 'react';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

const ButtonAtom = ({ className, disabled, onClick, children, isCloseButton }) => {
  if (isCloseButton) {
    return (
      <Button onClick={onClick} className={className} disabled={disabled}>
        <CloseIcon />
      </Button>
    );
  }

  return (
    <Button onClick={onClick} className={className} disabled={disabled}>
      {children}
    </Button>
  );
};

export default ButtonAtom;
