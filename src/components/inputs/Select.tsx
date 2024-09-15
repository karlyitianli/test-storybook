import React from 'react';
import Select, { SelectProps as MUISelectProps } from '@mui/material/Select';

export interface SelectProps extends MUISelectProps {
  // Add any custom props here
}

export const MUISelect: React.FC<SelectProps> = ({ children, ...props }) => {
  return <Select {...props}>{children}</Select>;
};