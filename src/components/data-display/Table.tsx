import React from 'react';
import Table, { TableProps as MUITableProps } from '@mui/material/Table';

export interface TableProps extends MUITableProps {}

export const MUITable: React.FC<TableProps> = ({ children, ...props }) => {
  return <Table {...props}>{children}</Table>;
};