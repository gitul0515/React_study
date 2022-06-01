import React from 'react';
import Box from './Box';

const Paragraph = ({ line = 3, ...props }) => {
  return (
    <div {...props}>
      {Array.from(Array(line), (_, i) => {
        if (i === line - 1) {
          return <Box width="64%" height={16} key={i} />;
        }
        return <Box width="100%" height={16} key={i} />;
      })}
    </div>
  );
};

export default Paragraph;
