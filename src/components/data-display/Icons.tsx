import React from 'react';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

const Icons: React.FC<IconProps> = ({ name, size = 24, color = 'black' }) => {
  return (
    <i className={`icon-${name}`} style={{ fontSize: size, color }} />
  );
};

export default Icons;