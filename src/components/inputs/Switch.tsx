import React from 'react';
import Switch, { SwitchProps as MUISwitchProps } from '@mui/material/Switch';

export interface SwitchProps extends MUISwitchProps {
  // Add any custom props here
}

export const MUISwitch: React.FC<SwitchProps> = (props) => {
  return <Switch {...props} />;
};