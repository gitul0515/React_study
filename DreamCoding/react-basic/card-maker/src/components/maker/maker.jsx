import React from 'react';
import styles from './maker.module.css';

const Maker = ({profiles}) => {
  return (
    <section className={styles.cardMaker}>
      <h1 className={styles.title}>Card Maker</h1>
      <ul>
        {
          profiles.map(profile => {}
            
          )
        }
      </ul>
    </section>
  );
};

export default Maker;