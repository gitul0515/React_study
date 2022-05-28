import styled from '@emotion/styled';

const Button = styled.button`
  display: block;
  width: 100%;
  height: 40px;
  padding: 8px 6px;
  border: none;
  border-radius: 4px;
  margin-top: 16px;
  outline: none;
  color: white;
  background-color: black;
  cursor: pointer;

  &:hover {
    background-color: #111;
  }

  &:active {
    background-color: #222;
  }

  &:disabled {
    background-color: #888;
  }
`;

export default Button;
