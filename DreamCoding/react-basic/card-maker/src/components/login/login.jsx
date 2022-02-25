import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = () => {
  return (
    <section className={styles.login}>
      <Header />
      <section className={styles.main}>
        <h1>Login</h1>
        <button>Google</button>
        <button>Github</button>
      </section>
      <Footer />
    </section>
  );
};

export default Login;