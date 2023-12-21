import React from 'react';
import Typography from '@mui/material/Typography';

function CustomTypography({ sx, variant, children }) {
  return (
    <Typography variant={variant} sx={sx}>
      {children}
    </Typography>
  );
}

export default CustomTypography;