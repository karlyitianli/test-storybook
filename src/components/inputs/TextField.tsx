import React from 'react';
import TextField, { TextFieldProps as MUITextFieldProps } from '@mui/material/TextField';

export interface TextFieldProps extends MUITextFieldProps {
  // Add any custom props here
}

export const MUITextField: React.FC<TextFieldProps> = (props) => {
  return <TextField {...props} />;
};