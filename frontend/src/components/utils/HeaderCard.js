import React from "react";
import { Typography } from "@mui/material";
import styles from "./HeaderCard.module.css";

const HeaderCard = ({ data }) => {
  return (
    <div className={styles.card_container}>
      <div className={styles.heading} gutterBottom>
        {`We found #${data.number} ${data.tag} tags on this page.`}
      </div>
      {data?.tag_data?.map((str, idx) => {
        return (
          <Typography variant="subtitle2" gutterBottom>{`${
            idx + 1
          }. ${str}`}</Typography>
        );
      })}
    </div>
  );
};

export default HeaderCard;
