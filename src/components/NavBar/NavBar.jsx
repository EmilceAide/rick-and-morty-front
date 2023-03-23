import React from 'react';
import SearchBar from '../searchBar/SearchBar.jsx';
import styles from './navBar.module.css'

const NavBar = ({onSearch, onGetRandom }) => {
    return (
        <div className={styles.container}>
         <SearchBar onSearch={onSearch} />
         <button onClick={() => onGetRandom(1, 826, onSearch)} className={styles.btnRandom}>Agregar</button>
        </div>
    );
}

export default NavBar;
