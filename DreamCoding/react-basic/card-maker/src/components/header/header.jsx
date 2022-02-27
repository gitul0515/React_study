import React from 'react';
import styles from './header.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

const Header = ({isLogged, authService}) => {
  const navigate = useNavigate();
  const onLogout = () => {
    authService
    .logout()
    .then(() => navigate('/'))
    .catch(() => console.error('logout error'));
  };

  return (
    <header className={styles.header}>
      <img src="images/logo.png" alt="로고 이미지"/>
      <h1>Business Card Maker</h1>
      {
        isLogged && (
          <button className={styles.signOutButton} onClick={onLogout}>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </button>
        )
      }
    </header>
  );
};

export default Header;