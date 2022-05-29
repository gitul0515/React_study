import React, { useState } from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import SignUpForm from './components/LoginForm/SignUpForm';
import Button from './components/StyledButton';

const onSubmit = async () => {
  const sleep = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 1000);
    });
  };
  await sleep();
  console.log('submit!');
};

function App() {
  return (
    <Button color="red" background="yellow" primary="true">
      click
    </Button>
  );
}

export default App;
