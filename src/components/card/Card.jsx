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
  const {myFavorites}= useSelector(state => state)
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    if (isFavorite) {
      console.log(isFavorite)
      setIsFavorite(false);
      dispatch(deleteFavorite(id));
    } 
  };

  const handleTrueFav =() =>{
  if(!isFavorite){
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
  }

  useEffect(() => {
   myFavorites.map((fav) => {
      if(fav.id === id) {
         setIsFavorite(true);
      }
   });
}, [myFavorites]);

  return (
    <div className={styles.container}>
      {isFavorite ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleTrueFav}>🤍</button>
      )}

      <button onClick={onClose} className={styles.close}>
        X
      </button>
      <Link to={`/detail/${id}`}>
        <img src={image} alt="Avatar del personaje" className={styles.image} />
        <h2 className={styles.name}>{name}</h2>
      </Link>
      {/* <h2 className={styles.origin}>{origin}</h2> */}
      {/* <h2 className={styles.species}>{species}</h2>
         <h2 className={styles.gender}>{gender}</h2>
         <h2 className={styles.status}>{status}</h2> */}
    </div>
  );
};

export default Card;
