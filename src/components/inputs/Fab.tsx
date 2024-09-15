import React from 'react';
import Fab, { FabProps as MUIFabProps } from '@mui/material/Fab';

export interface FabProps extends MUIFabProps {
  // Add any custom props here
}

export const MUIFab: React.FC<FabProps> = ({ children, ...props }) => {
  return <Fab {...props}>{children}</Fab>;
};