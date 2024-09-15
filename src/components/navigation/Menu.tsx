import React from 'react';
import Menu, { MenuProps as MUIMenuProps } from '@mui/material/Menu';

export interface MenuProps extends MUIMenuProps {
  // Add any custom props here
}

export const MUIMenu: React.FC<MenuProps> = ({ children, ...props }) => {
  return <Menu {...props}>{children}</Menu>;
};