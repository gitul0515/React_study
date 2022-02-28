import React, { useEffect } from 'react';
import styles from './main.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useNavigate } from 'react-router-dom';
import Maker from '../maker/maker';
import Preview from '../preview/preview';

const Main = ({authService}) => {
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService
    .onAuthStateChanged(user => {
      if (!user) {
        navigate('/');
      }
    })
  })

  return (
    <section className={styles.main}>
      <Header onLogout={onLogout}/>
      <section className={styles.content}>
        <Maker />
        <Preview />
      </section>
      <Footer />
    </section>
  );
};

export default Main;