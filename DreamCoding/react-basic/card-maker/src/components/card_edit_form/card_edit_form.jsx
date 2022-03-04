import React from 'react';
import styles from './card_edit_form.module.css';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/imageFileInput';

const CardEditForm = ({profile}) => {
  const {name, company, job, email, motto, cardTheme, photoURL} = profile;
  return (
    <li className={styles.cardEditForm}>
      <form className={styles.form}>
        <input className={styles.name} type="text" name="name" value={name} />
        <input className={styles.company} type="text" name="company" value={company} />
        <select className={styles.cardTheme} name="cardTheme" value={cardTheme}>
          <option value="black">black</option>
          <option value="white">white</option>
          <option value="colorful">colorful</option>
        </select>
        <input className={styles.job} type="text" name="job" value={job} />
        <input className={styles.email} type="text" name="email" value={email} />
        <textarea className={styles.motto} name="motto" value={motto}></textarea>
        <ImageFileInput name={name}/>
        <Button text="delete"/>
      </form>
    </li>
  );
};

export default CardEditForm;