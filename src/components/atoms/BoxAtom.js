import React from 'react';
import Box from '@mui/material/Box';

function BoxAtom({ children, sx }) {
  return <Box sx={sx}>{children}</Box>;
}

export default BoxAtom;