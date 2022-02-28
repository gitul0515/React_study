import React from 'react';
import styles from './maker.module.css';

const Maker = ({cards}) => {
  return (
    <section className={styles.cardMaker}>
      <h1 className={styles.title}>Card Maker</h1>
    </section>
  );
};

export default Maker;