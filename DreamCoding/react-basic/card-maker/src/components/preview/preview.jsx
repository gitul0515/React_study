import React from 'react';
import styles from './preview.module.css';
import Card from '../card/card';

const Preview = ({profiles}) => {
  return (
    <section className={styles.cardPreview}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul>
        {
          profiles.map(profile => (
            <Card key={profile.id} profile={profile} />
          ))
        }
      </ul>
    </section>
  );
};

export default Preview;