import React from 'react';
import styles from './maker.module.css';
import CardEditForm from '../card_edit_form/card_edit_form';

const Maker = ({profiles}) => {
  return (
    <section className={styles.cardMaker}>
      <h1 className={styles.title}>Card Maker</h1>
      <ul>
        {
          profiles.map(profile => (
            <CardEditForm profile={profile} />
          ))
        }
      </ul>
    </section>
  );
};

export default Maker;