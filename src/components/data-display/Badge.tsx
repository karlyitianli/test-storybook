import React from 'react';

interface BadgeProps {
  label: string;
  color?: string;
}

const Badge: React.FC<BadgeProps> = ({ label, color = 'gray' }) => {
  return (
    <span style={{ backgroundColor: color, padding: '5px 10px', borderRadius: '5px', color: 'white' }}>
      {label}
    </span>
  );
};

export default Badge;