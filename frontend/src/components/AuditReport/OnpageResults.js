import React, { useContext } from "react";
import { Typography } from "@mui/material";
import ResultCard from "../utils/ResultCard";
import styles from "./OnpageResults.module.css";
import { AppContext } from "../../context/application-context";

const OnpageResults = () => {
  const appCtx = useContext(AppContext);
  const insightPageData = appCtx.insightPageData;
  const lighthouseData = appCtx.lighthouseData;

  // onpage results data tranformation
  const insightPageRef = insightPageData?.tasks[0]?.result[0]?.items[0]?.meta;
  const onpageResultsData = [];

  for (const key in insightPageRef) {
    const obj = {
      quantity: "",
      title: "",
    };
    obj.quantity = insightPageRef[key];
    obj.title = key.replace(/\_/g, " ");

    const words = obj.title.split(" ");

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    words.join(" ");

    obj.title = words.join(" ");

    onpageResultsData.push(obj);
  }

  return (
    <div className={styles.page_results_container}>
      <Typography variant="h4" gutterBottom className={styles.heading}>
        OnPage Results
      </Typography>
      <div className={styles.cards_container}>
        {onpageResultsData.slice(9, 22).map((data) => {
          return <ResultCard data={data} />;
        })}
      </div>
    </div>
  );
};

export default OnpageResults;
