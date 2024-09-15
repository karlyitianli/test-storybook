import React from 'react';
import Dialog, { DialogProps as MUIDialogProps } from '@mui/material/Dialog';

export interface DialogProps extends MUIDialogProps {
  // Add any custom props here
}

export const MUIDialog: React.FC<DialogProps> = ({ children, ...props }) => {
  return <Dialog {...props}>{children}</Dialog>;
};