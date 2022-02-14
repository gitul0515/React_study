import React, { useRef } from 'react';
import styles from './header.module.css';

const Header = ({onSearch}) => {
  const inputRef = useRef();

  const handleSearch = () => {
    onSearch && onSearch(inputRef.current.value);
    inputRef.current.value = '';
  };

  const onKeyDown = e => {
    if (e.code === 'Enter') handleSearch();
  };

  const onClick = () => {
    handleSearch();
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>youtube</h1>
      <input className={styles.searchBar} type="search" placeholder='search...' ref={inputRef} onKeyDown={onKeyDown}/>
      <button className={styles.searchBtn} onClick={onClick}>Go</button>
    </header>
  );
};

export default Header;