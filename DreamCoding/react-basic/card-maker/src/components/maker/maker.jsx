import React from 'react';
import styles from './maker.module.css';
import CardEditForm from '../card_edit_form/card_edit_form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Maker = ({profiles, onAddEditForm, onAdd}) => {
  return (
    <section className={styles.cardMaker}>
      <h1 className={styles.title}>Card Maker</h1>
      <ul>
        {
          profiles.map(profile => (
            <CardEditForm key={profile.id} profile={profile} onAdd={onAdd}/>
          ))
        }
      </ul>
      <button className={styles.addButton} onClick={onAddEditForm}>
        <FontAwesomeIcon icon={faPlus}/>
      </button>
    </section>
  );
};

export default Maker;