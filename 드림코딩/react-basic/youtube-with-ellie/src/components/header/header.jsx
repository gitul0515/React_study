import React, { useRef } from 'react';
import styles from './header.module.css';

const Header = ({onSearch}) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const { value } = inputRef.current;
    if (value === '') return;
    onSearch && onSearch(value);
    inputRef.current.value = '';
  };

  const onKeyUp = e => {
    if (e.code === 'Enter') handleSearch();
  };

  const onClick = () => {
    handleSearch();
  };

  return (
    <header className={styles.header}>
      <a href="http://localhost:3000"><h1 className={styles.logo}>youtube</h1></a> 
      <input 
        className={styles.searchBar} type="search" placeholder='search...' ref={inputRef} 
        onKeyUp={onKeyUp}
      />
      <button className={styles.searchBtn} onClick={onClick}>Go</button>
    </header>
  );
};

export default Header;