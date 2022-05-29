import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const StyledButton = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;

  color: ${({ color }) => color || 'gray'};
  background: ${({ background }) => background || 'white'};

  ${({ primary }) =>
    primary &&
    css`
      color: white;
      background-color: navy;
      border-color: pink;
    `}
`;

function Button({ children, ...props }) {
  const { color, background, primary } = props;
  return (
    <StyledButton color={color} background={background} primary={primary}>
      {children}
    </StyledButton>
  );
}

export default Button;
