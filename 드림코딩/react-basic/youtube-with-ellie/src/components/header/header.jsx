import React from 'react';
import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>youtube</h1>
      <input className={styles.searchBar} type="search" placeholder='search...'/>
      <button className={styles.searchBtn}>Go</button>
    </header>
  );
};

export default Header;