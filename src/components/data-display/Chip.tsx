import React from 'react';
import { Chip as MuiChip } from '@mui/material';

interface ChipProps {
  label: string;
  onDelete?: () => void;
}

const Chip: React.FC<ChipProps> = ({ label, onDelete }) => {
  return (
    <MuiChip
      label={label}
      onDelete={onDelete}
      variant="outlined"
    />
  );
};

export default Chip;