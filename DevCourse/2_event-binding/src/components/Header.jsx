import React from 'react';

const Header = ({ children, level = 1, strong, underline, color, ...props }) => {
  let Tag = `h${level}`;

  const fontStyle = {
    fontWeight: strong ? 'bold' : 'normal',
    textDecoration: underline ? 'underline' : undefined,
    color,
  };

  return (
    <Tag style={{ ...props.style, ...fontStyle }} {...props}>
      {children}
    </Tag>
  );
};

export default Header;
