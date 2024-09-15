import React from 'react';
import Radio, { RadioProps as MUIRadioProps } from '@mui/material/Radio';

export interface RadioProps extends MUIRadioProps {
  // Add any custom props here
}

export const MUIRadio: React.FC<RadioProps> = (props) => {
  return <Radio {...props} />;
};