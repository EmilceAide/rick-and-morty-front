import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "./navBar.module.css";

const NavBar = ({ onSearch, onGetRandom, logout }) => {
  return (
    <div className={styles.container}>

      <div className={styles.contentOne}>
      </div>

      <div className={styles.contentTwo}>
      <button
        onClick={() => onGetRandom(1, 826, onSearch)}
        className={styles.btnRandom}
        >
        Agregar
      </button>
      <SearchBar onSearch={onSearch} />
      <Link to="/home">
        <button className={styles.btn}> HOME </button>
      </Link>
      <Link to="/favorites">
        <button className={styles.btn}> FAVORITES </button>
      </Link>
       <Link>
        <button className={styles.btn}>ABOUT</button >
      </Link>
      <Link to="/">
      <button onClick={logout} className={styles.btn}> CERRAR SESION </button>
      </Link>
      </div>
        
    </div>
  );
};

export default NavBar;
