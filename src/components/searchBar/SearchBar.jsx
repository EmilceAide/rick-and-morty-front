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
        placeholder="id"
      />
      <button onClick={() => onSearch(id)} className={styles.btn}>
        {"+"}
      </button>
    </div>
  );
};

export default SearchBar;
