import React, { useState } from 'react';
import styled from '@emotion/styled';

const Form = styled.form`
  width: 400px;
`;

const Input = styled.input`
  width: 332px;
  height: 32px;
  padding: 4px 6px;
  border-radius: 8px;
  border: 2px solid black;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 60px;
  height: 32px;
  padding: 4px 6px;
  margin-left: 8px;
  color: white;
  border-radius: 8px;
  border: none;
  background-color: black;
  cursor: pointer;
`;

function NewTaskForm() {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTask('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <Button type="submit">Add</Button>
    </Form>
  );
}

export default NewTaskForm;
