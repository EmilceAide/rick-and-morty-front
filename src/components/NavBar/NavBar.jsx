import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar.jsx";
import styles from "./navBar.module.css";

const NavBar = ({ onSearch, onGetRandom }) => {
  return (
    <div className={styles.container}>
        <Link to="/home">
            <button> Home </button>
        </Link>
        <Link to="/about" >
            <button>About</button>
        </Link>
      <SearchBar onSearch={onSearch} />
      <button
        onClick={() => onGetRandom(1, 826, onSearch)}
        className={styles.btnRandom}
      >
        Agregar
      </button>
    </div>
  );
};

export default NavBar;
