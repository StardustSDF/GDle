import React from 'react';

interface MoveProps {
  children: React.ReactNode;
  /**
  * Moves anything the Move tag encaputres. Use negative values to move left and up
  */
  moveRight?: string | number;
  moveDown?: string | number;
}

const Move: React.FC<MoveProps> = ({
  children,
  moveRight = '0px',
  moveDown = '0px',
}) => {
  const moveStyle: React.CSSProperties = {
    position: 'relative',
    left: moveRight,
    top: moveDown,
  };

  return (
    <div style={moveStyle}>
      {children}
    </div>
  );
};

export default Move;