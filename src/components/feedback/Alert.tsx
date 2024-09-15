import React from 'react';
import Alert, { AlertProps as MUIAlertProps } from '@mui/material/Alert';

export interface AlertProps extends MUIAlertProps {
  // Add any custom props here
}

export const MUIAlert: React.FC<AlertProps> = ({ children, ...props }) => {
  return <Alert {...props}>{children}</Alert>;
};