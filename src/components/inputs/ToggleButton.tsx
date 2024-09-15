import React from 'react';
import ToggleButton, { ToggleButtonProps as MUIToggleButtonProps } from '@mui/material/ToggleButton';

export interface ToggleButtonProps extends MUIToggleButtonProps {
  // Add any custom props here
}

export const MUIToggleButton: React.FC<ToggleButtonProps> = ({ children, ...props }) => {
  return <ToggleButton {...props}>{children}</ToggleButton>;
};