import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./detail.module.css";

const Detail = ({ getCharacter }) => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    getCharacter(id)
      .then(({ data }) => {
        if (data.id) {
          setCharacter(data);
        }
      })
      .catch(() => {
        alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [getCharacter, id]);

  return (
    <div className={styles.container}>
      <img
        src={character.image}
        alt="Avatar del personaje"
        className={styles.image}
      />
      <p className={styles.name}>{character.name}</p>
      <p className={styles.id}>{character.id}</p>
      <div className={styles.info}>
        <p className={styles.species}>Specie: {character.species}</p>
        <p className={styles.gender}>Gender: {character.gender}</p>
        <p className={styles.status}>Status: {character.status}</p>
      </div>
      <p className={styles.origin}>Origin: {character.origin?.name}</p>
      <p className={styles.location}>Location: {character.location?.name} </p>
    </div>
  );
};

export default Detail;
