import React, { useContext } from "react";
import styles from "./SpeedInsights.module.css";
import ResultCard from "../utils/ResultCard";
import { Typography } from "@mui/material";
import { AppContext } from "../../context/application-context";

const SpeedInsights = () => {
  const appCtx = useContext(AppContext);
  const insightPageData = appCtx.insightPageData;

  // speed insights data tranformation
  const insightPageRef =
    insightPageData?.tasks[0]?.result[0]?.items[0]?.page_timing;
  const speedInsightsData = [];

  for (const key in insightPageRef) {
    const obj = {
      quantity: "",
      title: "",
    };
    obj.quantity = Number(insightPageRef[key]).toFixed(2) + " " + "ms";
    obj.title = key.replace(/\_/g, " ");

    const words = obj.title.split(" ");

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    words.join(" ");
    obj.title = words.join(" ");

    speedInsightsData.push(obj);
  }

  console.log(speedInsightsData);

  return (
    <div className={styles.page_results_container}>
      <Typography variant="h4" gutterBottom>
        Speed Insights
      </Typography>
      <div className={styles.cards_container}>
        {speedInsightsData.map((data) => {
          return <ResultCard data={data} />;
        })}
      </div>
    </div>
  );
};

export default SpeedInsights;
