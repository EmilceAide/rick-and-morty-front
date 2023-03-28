import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";

const Footer = () => {
  const date = new Date();

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p className={styles.text}>{date.getFullYear()} | Emilce Aide | </p>
        <Link to="about">
          <button className={styles.btn}>ABOUT</button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
