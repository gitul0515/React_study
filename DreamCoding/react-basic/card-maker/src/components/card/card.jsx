import React from 'react';
import styles from './card.module.css';

const Card = ({profile}) => {
  return (
    <li className={styles.card}>
      <img className={styles.photo} src={profile.photoURL} alt="프로필 사진" />
      <div className={styles.information}>
        <div className={styles.information__main}>
          <h2>{profile.name}</h2>
          <span>{profile.workplace}</span>
        </div>
        <div className={styles.information__sub}>
          <span>{profile.job}</span>
          <span>{profile.email}</span>
          <p className={styles.motto}>{profile.motto}</p>
        </div>
      </div>
    </li>
  );
};

export default Card;