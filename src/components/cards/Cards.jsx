import Card from "../Card/Card";
import styles from "./cards.module.css";

const Cards = ({ characters, onClose }) => {
  return (
    <div className={styles.container}>
      {characters.map((element) => {
        return (
          <Card
            key={element.id}
            id={element.id}
            name={element.name}
            status={element.status}
            species={element.species}
            gender={element.gender}
            origin={element.origin.name}
            image={element.image}
            onClose={() => onClose(element.id)}
          />
        );
      })}
    </div>
  );
};

export default Cards;
