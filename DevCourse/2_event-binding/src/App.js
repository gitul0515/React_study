import React, { useState } from 'react';
import styled from '@emotion/styled';
import LoginForm from './components/LoginForm/LoginForm';
import SignUpForm from './components/LoginForm/SignUpForm';
import Button from './components/StyledButton';
import NewTaskForm from './components/Todo/NewTaskForm';
import TaskList from './components/Todo/TaskList';
import Header from './components/Todo/Header';

const onSubmit = async () => {
  const sleep = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 1000);
    });
  };
  await sleep();
  console.log('submit!');
};

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`;

function App() {
  const task = {
    content: '출근하기',
    complete: false,
  };
  return (
    <Container>
      <Header>ToDo</Header>
      <NewTaskForm />
      <TaskList content={task.content} complete={task.complete} />
    </Container>
  );
}

export default App;
