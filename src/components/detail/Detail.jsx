import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./detail.module.css";

const Detail = ({ url }) => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios
      .get(`${url}/${id}`)
      .then(({ data }) => {
        if (data.id) {
          setCharacter(data);
        }
      })
      .catch(() => {
        alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [id]);

  return (
    <div className={styles.container}>
      <img
        src={character.image}
        alt="Avatar del personaje"
        className={styles.image}
      />
      <p className={styles.name}>{character.name}</p>
      <p className={styles.origin}>Origen: {character.origin?.name}</p>
      <p className={styles.species}>Especie: {character.species}</p>
      <p className={styles.gender}>Género: {character.gender}</p>
      <p className={styles.status}>Estado: {character.status}</p>
      {/* <p>{character.location?.name} className={styles.location}</p> */}
    </div>
  );
};

export default Detail;
