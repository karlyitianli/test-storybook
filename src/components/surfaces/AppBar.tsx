import React from 'react';
import AppBar, { AppBarProps as MUIAppBarProps } from '@mui/material/AppBar';

export interface AppBarProps extends MUIAppBarProps {
  // Add any custom props here
}

export const MUIAppBar: React.FC<AppBarProps> = ({ children, ...props }) => {
  return <AppBar {...props}>{children}</AppBar>;
};