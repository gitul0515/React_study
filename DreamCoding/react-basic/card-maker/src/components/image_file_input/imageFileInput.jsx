import React from 'react';
import styles from './imageFileInput.module.css'

const ImageFileInput = ({name}) => {
  return <button className={styles.button}>{name}</button>
};

export default ImageFileInput;