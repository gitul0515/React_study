import React, { useEffect } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';
import { useNavigate } from 'react-router-dom';

const Login = ({authService}) => {
  const navigate = useNavigate();

  const goToMain = (userId) => {
    navigate('/main', {state: {id: userId}});
  };

  const onLogin = (event) => {
    authService
    .login(event.currentTarget.textContent)
    .then(data => goToMain(data.user.uid))
    .catch(() => console.log('Login failure'))
  };

  // 사용자의 로그인 정보가 있으면, 
  // 로그인 절차를 생략하고 main 페이지로 이동한다.
  useEffect(() => {
    authService
    .onAuthStateChanged(user => {
      if (user) {
        goToMain(user.uid);
      }
    });
  });

  return (
    <section className={styles.login}>
      <Header />
      <section className={styles.content}>
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