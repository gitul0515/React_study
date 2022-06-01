import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: ${({ block }) => (block ? 'block' : 'inline-block')};
`;

const Label = styled.label`
  display: block;
  font-size: 12px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 4px 8px;
  border: 1px solid ${({ invalid }) => (invalid ? 'red' : 'gray')};
  border-radius: 4px;
`;

const Input = ({
  label,
  placeholder,
  block = false,
  invalid = false,
  required = false,
  disabled = false,
  readOnly = false,
  wrapperProps,
  ...props
}) => {
  return (
    <Wrapper block={block} {...wrapperProps}>
      <Label>{label}</Label>
      <StyledInput
        placeholder={placeholder}
        invalid={invalid}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        {...props}
      />
    </Wrapper>
  );
};

export default Input;
