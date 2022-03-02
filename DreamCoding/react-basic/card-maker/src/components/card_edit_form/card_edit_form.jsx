import React from 'react';
import styles from './card_edit_form.module.css';

const CardEditForm = ({profile}) => {
  return (
    <li className={styles.cardEditForm}>{profile.name}</li>
  );
};

export default CardEditForm;