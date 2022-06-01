import React from 'react';
import styled from '@emotion/styled';
import Base from './Base';

const CircularBase = styled(Base)`
  border-radius: 50%;
`;

const Circle = ({ size }) => {
  const style = {
    width: size === 'number' ? `${size}px` : size,
    height: size === 'number' ? `${size}px` : size,
  };
  return <CircularBase style={style} />;
};

export default Circle;
