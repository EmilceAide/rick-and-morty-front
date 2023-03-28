import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import styles from "./card.module.css";
import { addFavorite, deleteFavorite } from "../../redux/actions";

const Card = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) => {
  const dispatch = useDispatch();
  const { myFavorites } = useSelector((state) => state);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    if (isFavorite) {
      console.log(isFavorite);
      setIsFavorite(false);
      dispatch(deleteFavorite(id));
    }
  };

  const handleTrueFav = () => {
    if (!isFavorite) {
      setIsFavorite(true);
      dispatch(
        addFavorite({
          id,
          name,
          status,
          species,
          gender,
          origin,
          image,
          onClose,
        })
      );
    }
  };

  useEffect(() => {
    myFavorites.map((fav) => {
      if (fav.id === id) {
        setIsFavorite(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h3 className={styles.id}> {id} </h3>
        <button onClick={onClose} className={styles.close}>
          X
        </button>
      </div>
      <div className={styles.center}>
        <img src={image} alt="Avatar del personaje" className={styles.image} />
        <div className={styles.containerName}>
          <p className={styles.name}>{name}</p>
        </div>
      </div>

      <div className={styles.accions}>
        {isFavorite ? (
          <button onClick={handleFavorite} className={styles.btn}>
            ❤️
          </button>
        ) : (
          <button onClick={handleTrueFav} className={styles.btn}>
            🤍
          </button>
        )}
        <Link to={`/detail/${id}`}>
          <button className={styles.detail}>{` + `} </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
