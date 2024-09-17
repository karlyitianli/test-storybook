import React from 'react';
import MUITextField, { TextFieldProps as MUITextFieldProps } from '@mui/material/TextField';

export interface TextFieldProps extends MUITextFieldProps {
  // Add any custom props here
}

export const TextField: React.FC<TextFieldProps> = ({ 
  variant = 'outlined',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  ...props 
}) => {
  return (
    <MUITextField 
      variant={variant}
      size={size}
      disabled={disabled}
      fullWidth={fullWidth}
      {...props}
    />
  );
};