import React from 'react';
import styles from './preview.module.css';

const Preview = ({cards}) => {
  return (
    <section className={styles.cardPreview}>
      <h1 className={styles.title}>Card Preview</h1>
    </section>
  );
};

export default Preview;