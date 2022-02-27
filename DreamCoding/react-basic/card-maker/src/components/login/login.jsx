import React, { useState } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';
import { useNavigate } from 'react-router-dom';

const Login = ({authService}) => {
  const [onlogOut, setOnlogOut] = useState(false);
  const navigate = useNavigate();

  const onLogin = (event) => {
    authService
    .login(event.currentTarget.textContent)
    .then(() => navigate('/main'))
    .then(() => setOnlogOut(true))
    .catch(() => console.error('error'));
  };

  return (
    <section className={styles.login}>
      <Header onlogOut={onlogOut}/>
      <section className={styles.main}>
        <h1>Login</h1>
        <ul>
          <li>
            <button onClick={onLogin}>Google</button>
          </li>
          <li>
            <button onClick={onLogin}>Facebook</button>
          </li>
          <li>
            <button onClick={onLogin}>Github</button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;