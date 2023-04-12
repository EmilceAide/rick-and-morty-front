import React, { useState } from "react";
import Card from "../card/Card";
import styles from "./pagination.module.css";

function Pagination({ characters, itemsPerPage, pagesToShow, onClose, isLoading }) {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = characters.slice(indexOfFirstItem, indexOfLastItem);
  console.log('currentData', currentData)

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(characters.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.container}>
      <div className={styles.pagination}>
        {pageNumbers.map((pageNumber) => (
          <button className={styles.btnNumber} key={pageNumber} onClick={() => setCurrentPage(pageNumber)}>
            {pageNumber}
          </button>
        ))}
      </div>
      <div className={styles.containerCards}>
        {currentData.map((element) => (
          <Card
          key={element.id}
          id={element.id}
          name={element.name}
          image={element.image}
          gender={element.gender}
          species={element.species}
          // status={element.status}
          // origin={element.origin.name}
          onClose={() => onClose(element.id)}
          />
          ))}
          {isLoading && (
            <div className={styles.isLoading}>
            <div className={styles.loader}></div>
            </div>
          )}
      </div>
    </div>
  );
}

export default Pagination;
