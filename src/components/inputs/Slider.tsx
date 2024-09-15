import React from 'react';
import Slider, { SliderProps as MUISliderProps } from '@mui/material/Slider';

export interface SliderProps extends MUISliderProps {
  // Add any custom props here
}

export const MUISlider: React.FC<SliderProps> = (props) => {
  return <Slider {...props} />;
};