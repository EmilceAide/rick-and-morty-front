import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Rick-And-Morty-Free-Picture-PNG.png";
import title from "../../assets/rickandmorty.png";
import { validation } from "../../models/validation";
import styles from "./formLogin.module.css";

const FormLogin = ({ login }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validation({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const aux = Object.keys(errors);
    if (aux.length === 0) {
      setUserData({
        email: "",
        password: "",
      });
      setErrors({
        email: "",
        password: "",
      });
      login(userData);
    }
  };

  return (
    <>
      <img src={title} alt="Rick and Morty" className={styles.title} />
      <div className={styles.container}>
        <img src={logo} alt="rick and Morty" className={styles.logo} />
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.email}>Email address:</label>
          <input
            className={styles.inputEmail}
            type="email"
            name="username"
            placeholder="name@example.com"
            value={userData.username}
            onChange={handleChange}
          />
          <p>
            {errors.username && (
              <p style={{ color: "red" }}>{errors.username}</p>
            )}
          </p>

          <label className={styles.password}>Password:</label>
          <input
            className={styles.inputPass}
            type="password"
            name="password"
            placeholder="password"
            value={userData.password}
            onChange={handleChange}
          />
          <p>
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}
          </p>
          {Object.keys(errors).length === 0 ? (
            <Link to="/home">
              <button type="submit" className={styles.login}>
                Log in
              </button>
            </Link>
          ) : (
            <Link to="/home">
              <button type="submit" className={styles.login} disabled>
                Log in
              </button>
            </Link>
          )}

          <hr />
          <h3 className={styles.emailandpass}>Email address:  emi@gmail.com</h3>
          <h3 className={styles.emailandpass}>Password: Pass123!</h3>
        </form>
      </div>
    </>
  );
};

export default FormLogin;
