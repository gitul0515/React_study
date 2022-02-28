import React from 'react';
import styles from './header.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

const Header = ({onLogout}) => {
  return (
    <header className={styles.header}>
      <img src="images/logo.png" alt="로고 이미지"/>
      <h1>Business Card Maker</h1>
      {
        onLogout && (
          <button className={styles.signOutButton} onClick={onLogout}>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </button>
        )
      }
    </header>
  );
};

export default Header;