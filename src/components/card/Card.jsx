import { Link } from "react-router-dom";
import styles from './card.module.css'

const Card = ({id, name, status, species, gender, origin, image, onClose }) => {

   return (
      <div className={styles.container}>
         <button onClick={onClose} className={styles.close}>X</button>
         <Link to={`/detail/${id}`}>
         <img src={image} alt='Avatar del personaje' className={styles.image} />
         <h2 className={styles.name}>{name}</h2>
         </Link>
         <h2 className={styles.origin}>{origin}</h2>
         <h2 className={styles.species}>{species}</h2>
         <h2 className={styles.gender}>{gender}</h2>
         <h2 className={styles.status}>{status}</h2>
      </div>
   );
}

export default Card; 