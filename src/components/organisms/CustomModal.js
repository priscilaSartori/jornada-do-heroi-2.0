import React from 'react';
import Modal from '@mui/material/Modal';

function CustomModal({ open, onClose, children }) {
  return (
    <Modal open={open} onClose={onClose}>
      <div>  
        {children}
      </div>
    </Modal>
  );
}

export default CustomModal;