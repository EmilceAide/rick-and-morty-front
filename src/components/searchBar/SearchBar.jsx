import React, { useState } from "react";
import styles from "./searchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [id, setId] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
  };

  return (
    <div className={styles.containerSearch}>
      <input
        onChange={handleChange}
        type="search"
        className={styles.inputSearch}
        placeholder="  id de tu personaje"
      />
      <button onClick={() => onSearch(id)} className={styles.btnSearch}>
        Agregar
      </button>
    </div>
  );
};

export default SearchBar;
