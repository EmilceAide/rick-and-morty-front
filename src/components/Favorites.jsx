import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { orderCards, filterCards, deleteFavorite } from "../redux/actions";
import styles from "./favorites.module.css";

const Favorites = () => {
  const dispatch = useDispatch();
  const { charactersFav, myFavorites } = useSelector((state) => state);

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
  };

  const handleFavorite = (id) => {
    dispatch(deleteFavorite(id));
  };

  if (myFavorites.length === 0) {
    return (
      <h1
      style={{
        color: "#fff",
        padding: "0 50px",
        fontFamily: 'sans-serif',
        textAlign: "center",
        fontSize:'1.5em',
        marginTop: '10px',
      }}
      >
        To add a card to your 'favorites', simply click on 🤍.
      </h1>
    );
  }

  return (
    <div className={styles.containerOne}>

      <div className={styles.containerOptions}>
      <div className={styles.options}>
        <select onChange={handleOrder}>
          <option value="order">Order By</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select onChange={handleFilter}>
          <option value="filter">Filter By</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unknown">Unknown</option>
          <option value="Genderless">Genderless</option>
        </select>
      </div>
      </div>

      <div className={styles.gridContainer}>
        {charactersFav.map((el) => {
          return (
            <div className={styles.container} key={el.id}>
              <div className={styles.info}>
                <h3 className={styles.id}> {el.id} </h3>
                <button
                  onClick={() => handleFavorite(el.id)}
                  className={styles.close}
                >
                  X
                </button>
              </div>
              <div className={styles.center}>
                <img
                  src={el.image}
                  alt="Avatar del personaje"
                  className={styles.image}
                />
                <div className={styles.containerName}>
                  <p className={styles.name}>{el.name}</p>
                  <p className={styles.gender}>{el.gender}</p>
                </div>
              </div>

              <div className={styles.accions}>
                <Link to={`/detail/${el.id}`}>
                  <button className={styles.detail}>{` + `} </button>
                </Link>
              </div>
            </div>
          );
        })}

     
      </div>
    </div>
  );
};

export default Favorites;
