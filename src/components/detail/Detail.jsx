import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = ({url}) => {
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
      .catch(() =>{
         alert("No hay personajes con ese ID")
      })
    return setCharacter({});
  }, [id]);

  return (
    <div>
      <p>Details</p>
      <img src={character.image} alt="Avatar del personaje" />
      <h2>{character.name}</h2>
      <h2>{character.origin?.name}</h2>
      <h2>{character.species}</h2>
      <h2>{character.gender}</h2>
      <h2>{character.status}</h2>
    </div>
  );
};

export default Detail;
