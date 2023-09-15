import React from "react";
import styles from "./ResultCard.module.css";

const ResultCard = ({ data }) => {
  return (
    <div className={styles.card_container}>
      <div className={styles.number}>{data.quantity}</div>
      <div className={styles.title}>{data.title}</div>
    </div>
  );
};

export default ResultCard;
