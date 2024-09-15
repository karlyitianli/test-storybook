import React from 'react';
import List, { ListProps as MUIListProps } from '@mui/material/List';

export interface ListProps extends MUIListProps {
  // Add any custom props here
}

export const MUIList: React.FC<ListProps> = ({ children, ...props }) => {
  return <List {...props}>{children}</List>;
};