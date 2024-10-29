import React from 'react';

interface LayoutContainerProps {
  children: React.ReactNode;
  /**
  * Basically just makes a flex row or column. Type RC row to make a row, RC column to make a column.
  */
  row?: boolean;
  column?: boolean;
  /**
  * Try not to use these. Instead ensure the Container of each RC element is sized properly.
  */
  width?: string;
  height?: string;
  /**
  * Try not to use gap, use an extra Container instead
  */
  gap?: string;
}

const RC: React.FC<LayoutContainerProps> = ({
  children,
  row,
  column,
  width = 'auto',
  height = 'auto',
  gap = '0px',
}) => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: row ? 'row' : column ? 'column' : 'row',
    height: height,
    width: width,
    gap: gap,
  };

  return (
    <div style={containerStyle}>
      {children}
    </div>
  );
};

export default RC;