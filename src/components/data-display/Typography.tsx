import React from 'react';
import Typography, { TypographyProps as MUITypographyProps } from '@mui/material/Typography';

export interface TypographyProps extends MUITypographyProps {
  // Add any custom props here
}

export const MUITypography: React.FC<TypographyProps> = ({ children, ...props }) => {
  return <Typography {...props}>{children}</Typography>;
};