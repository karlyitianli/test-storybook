import React from 'react';
import Checkbox, { CheckboxProps as MUICheckboxProps } from '@mui/material/Checkbox';

export interface CheckboxProps extends MUICheckboxProps {
  // Add any custom props here
}

export const MUICheckbox: React.FC<CheckboxProps> = (props) => {
  return <Checkbox {...props} />;
};