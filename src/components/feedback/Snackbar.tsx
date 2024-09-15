import React from 'react';
import Snackbar, { SnackbarProps as MUISnackbarProps } from '@mui/material/Snackbar';

export interface SnackbarProps extends MUISnackbarProps {
  // Add any custom props here
}

export const MUISnackbar: React.FC<SnackbarProps> = (props) => {
  return <Snackbar {...props} />;
};