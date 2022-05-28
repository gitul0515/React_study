import React from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import SignUpForm from './components/LoginForm/SignUpForm';

const onSubmit = async () => {
  const sleep = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 1000);
    });
  };
  await sleep();
  console.log('submit!');
};

const App = () => {
  return (
    <>
      <LoginForm onSubmit={onSubmit} />
      <SignUpForm onSubmit={onSubmit} />
    </>
  );
};

export default App;
