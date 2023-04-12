import styles from "./cards.module.css";
import Pagination from '../pagination/Pagination'

const Cards = ({ characters, onClose, isLoading}) => {


  if (characters.length === 0) {
    return (
      <div className={styles.container}>
        <div
          style={{
            color: "#fff",
            padding: "0 50px",
            fontFamily: 'sans-serif',
            textAlign: "center",
            fontSize:'0.8em',
          }}
        >
          <h1>Welcome! </h1>
          <h2>
            Here you can add cards of the characters that you like the most.
            What are you waiting for?
          </h2>
          <h2>Start building your personal collection now.</h2>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
  <Pagination characters={characters} itemsPerPage={8} pagesToShow={5} onClose={onClose} isLoading={isLoading} />

    </div>
  );
};

export default Cards;
