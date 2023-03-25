import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Favorites = () => {

  const { myFavorites } = useSelector((state) => state);

  return (
    <div>
      {myFavorites.map((el) => {
        return (
          <>
            <Link to={`/detail/${el.id}`}>
              <img src={el.image} alt="Avatar del personaje" />
              <h2>{el.name}</h2>
            </Link>

            <h2>{el.origin}</h2>
            <h2>{el.species}</h2>
            <h2>{el.gender}</h2>
            <h2>{el.status}</h2>
          </>
        );
      })}
    </div>
  );
};

export default Favorites;
