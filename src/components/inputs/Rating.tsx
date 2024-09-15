import React from 'react';
import Rating, { RatingProps as MUIRatingProps } from '@mui/material/Rating';

export interface RatingProps extends MUIRatingProps {
  // Add any custom props here
}

export const MUIRating: React.FC<RatingProps> = (props) => {
  return <Rating {...props} />;
};