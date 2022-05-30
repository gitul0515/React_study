import React from 'react';
import styled from '@emotion/styled';

const Input = styled.input`
  width: 100%;
  padding: 4px 8px;
  border: 1px solid gray;
  border-radius: 4px;
  box-sizing: border-box;
`;

function SearchBox({ onSearch }) {
  return <Input onChange={(e) => onSearch(e.target.value)} />;
}

export default SearchBox;
