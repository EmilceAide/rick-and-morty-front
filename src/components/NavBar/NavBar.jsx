import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "./navBar.module.css";

const NavBar = ({ onSearch, onGetRandom, logout }) => {
  return (
    <div className={styles.container}>
      <Link to="/home">
        <button> Home </button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
      <SearchBar onSearch={onSearch} />
      <button
        onClick={() => onGetRandom(1, 826, onSearch)}
        className={styles.btnRandom}
      >
        Agregar
      </button>
      <button onClick={logout}> Cerrar Sesión </button>
    </div>
  );
};

export default NavBar;
