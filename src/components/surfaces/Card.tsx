import React from 'react';
import Card, { CardProps as MUICardProps } from '@mui/material/Card';

export interface CardProps extends MUICardProps {
  // Add any custom props here
}

export const MUICard: React.FC<CardProps> = ({ children, ...props }) => {
  return <Card {...props}>{children}</Card>;
};