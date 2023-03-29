import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar.jsx";
import styles from "./navBar.module.css";

const NavBar = ({ onSearch, onGetRandom, logout }) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentOne}>
        <Link to="/home">
          <button className={styles.home}> HOME </button>
        </Link>
        <Link to="/favorites">
          <button className={styles.favorites}> FAVORITES </button>
        </Link>
        <Link to="/about">
          <button className={styles.about}> ABOUT </button>
        </Link>
        <SearchBar onSearch={onSearch} />
      </div>

      <div className={styles.contentTwo}>
        <button
          onClick={() => onGetRandom(1, 826, onSearch)}
          className={styles.btnRandom}
        >
          {"+"}
        </button>
        <Link to="/">
          <button onClick={logout} className={styles.logout}>
            {" "}
            LOGOUT{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
