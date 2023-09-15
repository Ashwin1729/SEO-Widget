import React from "react";
import { Typography } from "@mui/material";
import ResultCard from "../utils/ResultCard";
import styles from "./OnpageResults.module.css";

const OnpageResults = () => {
  return (
    <div className={styles.page_results_container}>
      <Typography variant="h4" gutterBottom>
        OnPage Results
      </Typography>
      <div className={styles.cards_container}>
        <ResultCard data={{ quantity: 50, title: "Internal Links" }} />
        <ResultCard data={{ quantity: 50, title: "Internal Links" }} />
        <ResultCard data={{ quantity: 50, title: "Internal Links" }} />
        <ResultCard data={{ quantity: 50, title: "Internal Links" }} />
        <ResultCard data={{ quantity: 50, title: "Internal Links" }} />
        <ResultCard data={{ quantity: 50, title: "Internal Links" }} />
        <ResultCard data={{ quantity: 50, title: "Internal Links" }} />
        <ResultCard data={{ quantity: 50, title: "Internal Links" }} />
      </div>
    </div>
  );
};

export default OnpageResults;
