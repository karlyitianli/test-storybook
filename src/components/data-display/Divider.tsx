import React from 'react';

interface DividerProps {
  color?: string;
  thickness?: number;
}

const Divider: React.FC<DividerProps> = ({ color = 'gray', thickness = 1 }) => {
  return (
    <hr style={{ borderColor: color, borderWidth: thickness }} />
  );
};

export default Divider;