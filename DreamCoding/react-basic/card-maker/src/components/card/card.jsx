import React from 'react';
import styles from './card.module.css';

const DEFAULT_IMAGE = '/images/default_logo.png';

const Card = ({profile}) => {
  const {name, company, job, email, motto, cardTheme, photoURL} = profile;
  const url = photoURL || DEFAULT_IMAGE;
  return (
    <li className={`${styles.card} ${getStyles(cardTheme)}`}>
      <img className={styles.photo} src={url} alt="프로필 사진" />
      <div className={styles.information}>
        <div className={styles.information__main}>
          <h2>{name}</h2>
          <span>{company}</span>
        </div>
        <div className={styles.information__sub}>
          <span>{job}</span>
          <span>{email}</span>
          <p className={styles.motto}>{motto}</p>
        </div>
      </div>
    </li>
  );
};

const getStyles = (theme) => {
  switch (theme) {
    case "black":
      return styles.themeBlack;
    case "white":
      return styles.themeWhite;
    case "colorful":
      return styles.themeColorful;
  }
}

export default Card;