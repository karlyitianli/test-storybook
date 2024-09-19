import React from 'react';

interface ChipProps {
  label: string;
  onDelete?: () => void;
}

const Chip: React.FC<ChipProps> = ({ label, onDelete }) => {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', padding: '5px 10px', border: '1px solid gray', borderRadius: '16px' }}>
      <span>{label}</span>
      {onDelete && (
        <button onClick={onDelete} style={{ marginLeft: '10px', cursor: 'pointer' }}>
          &times;
        </button>
      )}
    </div>
  );
};

export default Chip;