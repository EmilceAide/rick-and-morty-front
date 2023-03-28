import React from "react";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h1>
        Welcome to our platform for collecting Rick and Morty character cards!
      </h1>
      <h2>
        Here you can find a wide variety of characters from the animated series,
        each with its own collectible card. You can add cards of the characters
        that you like the most to your personal collection! To do so, simply
        register on our website and start browsing the list of characters by
        their ID (the number that identifies them). Find the character you want
        and their collectible card will be automatically assigned to you. Start
        now and grow your collection of cards.
      </h2>
    </div>
  );
};

export default About;
