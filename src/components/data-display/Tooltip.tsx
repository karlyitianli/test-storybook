import React from 'react';
import Tooltip, { TooltipProps as MUITooltipProps } from '@mui/material/Tooltip';

export interface TooltipProps extends MUITooltipProps {}

export const MUITooltip: React.FC<TooltipProps> = ({ children, ...props }) => {
  return <Tooltip {...props}>{children}</Tooltip>;
};