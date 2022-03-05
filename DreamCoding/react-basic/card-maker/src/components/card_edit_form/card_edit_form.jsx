import React, { useRef } from 'react';
import styles from './card_edit_form.module.css';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/imageFileInput';

const CardEditForm = ({profile, onAdd, onDelete}) => {
  const nameInput = useRef();
  const companyInput = useRef();
  const themeInput = useRef();
  const jobInput = useRef();
  const emailInput = useRef();
  const mottoInput = useRef();

  const onClick = event => {
    event.preventDefault();
    const buttonText = event.target.textContent;
    if (buttonText === 'add') {
      const newProfile = {
        id: id, 
        name: nameInput.current.value,
        company: companyInput.current.value,
        job: jobInput.current.value,
        email: emailInput.current.value,
        motto: mottoInput.current.value,
        theme: themeInput.current.value,
        photoURL: null
      }
      onAdd(newProfile);
    } else if (buttonText === 'delete') {
      onDelete(id);
    }
  }

  const {id, name, company, job, email, motto, theme, photoURL} = profile;
  return (
    <li className={styles.cardEditForm}>
      <form className={styles.form}>
        <div>
          <input 
            className={styles.name} name="name" value={name} placeholder="Name" ref={nameInput}
          />
          <input 
            className={styles.company} name="company" value={company} placeholder="Company" ref={companyInput}
          />
          <select className={styles.theme} name="theme" ref={themeInput}>
            <option value="black">black</option>
            <option value="white">white</option>
            <option value="colorful">colorful</option>
          </select>
        </div>
        <div>
          <input 
            className={styles.job} name="job" value={job} placeholder="Job" ref={jobInput}
          />
          <input 
            className={styles.email} name="email" value={email} placeholder="Email" ref={emailInput}
          />
        </div>
        <textarea 
          className={styles.motto} name="motto" value={motto} placeholder="your motto" ref={mottoInput}>
        </textarea>
        <ImageFileInput name={name || "No file"}/>
        <Button text={name ? 'delete' : 'add'} onClick={onClick}/>
      </form>
    </li>
  );
};

export default CardEditForm;