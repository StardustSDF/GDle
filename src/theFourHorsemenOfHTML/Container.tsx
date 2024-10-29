import React from 'react';

interface CustomContainerProps {
  children?: React.ReactNode;
  /**
  * Width of the container
  */
  width?: string | number;
  /**
  * Height of the container
  */
  height?: string | number;
  /**
  * Every container draws an outline of the container automatically. Add outlineTransparent to make the container outline invisible
  */
  outlineTransparent?: boolean;
  /**
  * Aligns contents of the container inside the container
  */
  horizontalAlign?: 'left' | 'center' | 'right';
  verticalAlign?: 'top' | 'middle' | 'bottom';
  /**
  * I'm not really sure what className does
  */
  className?: string;
  /**
  * Lets you style the container itself
  */
  style?: React.CSSProperties;
}

const Container: React.FC<CustomContainerProps> = ({
  children,
  width = 'auto',
  height = 'auto',
  outlineTransparent = false,
  horizontalAlign = 'left',
  verticalAlign = 'top',
  className,
  style,
}) => {
  const containerStyle: React.CSSProperties = {
    width: width,
    height: height,
    border: `1px solid rgba(0, 0, 0, ${outlineTransparent ? 0 : 0.5})`,
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: (() => {
      switch (horizontalAlign) {
        case 'center':
          return 'center';
        case 'right':
          return 'flex-end';
        default:
          return 'flex-start';
      }
    })(),
    alignItems: (() => {
      switch (verticalAlign) {
        case 'middle':
          return 'center';
        case 'bottom':
          return 'flex-end';
        default:
          return 'flex-start';
      }
    })(),
    ...style,
  };

  return <div style={containerStyle} className={className}>{children}</div>;
};

export default Container;