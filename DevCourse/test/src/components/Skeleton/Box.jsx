import React from 'react';
import Base from './Base';

const Box = ({ width, height }) => {
  const style = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof width === 'number' ? `${height}px` : height,
  };

  return <Base style={style}></Base>;
};

export default Box;
