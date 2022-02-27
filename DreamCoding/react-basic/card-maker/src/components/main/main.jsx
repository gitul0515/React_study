import React from 'react';
import styles from './main.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';

const Main = ({isLogged, authService}) => {
  return (
    <section className={styles.main}>
      <Header authService={authService} isLogged={isLogged}/>
      <section className={styles.content}>

      </section>
      <Footer />
    </section>
  );
};

export default Main;