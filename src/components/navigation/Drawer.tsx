import React from 'react';
import Drawer, { DrawerProps as MUIDrawerProps } from '@mui/material/Drawer';

export interface DrawerProps extends MUIDrawerProps {
  // Add any custom props here
}

export const MUIDrawer: React.FC<DrawerProps> = ({ children, ...props }) => {
  return <Drawer {...props}>{children}</Drawer>;
};