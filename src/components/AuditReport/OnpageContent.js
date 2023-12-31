import React, { useContext } from "react";
import { Typography } from "@mui/material";
import ResultCard from "../utils/ResultCard";
import styles from "./OnpageContent.module.css";
import { AppContext } from "../../context/application-context";

const OnpageContent = () => {
  // accessing data from context api
  const appCtx = useContext(AppContext);
  const insightPageData = appCtx.insightPageData;

  // onpage content data tranformation
  const insightPageRef =
    insightPageData?.tasks[0]?.result[0]?.items[0]?.meta?.content;
  const onpageContentData = [];

  for (const key in insightPageRef) {
    const obj = {
      quantity: "",
      title: "",
    };
    obj.quantity = Number(insightPageRef[key]).toFixed(2);
    obj.title = key.replace(/\_/g, " ");

    const words = obj.title.split(" ");

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    words.join(" ");
    obj.title = words.join(" ");

    onpageContentData.push(obj);
  }

  return (
    <div className={styles.page_results_container}>
      <Typography variant="h4" gutterBottom className={styles.heading}>
        OnPage Contents
      </Typography>
      <div className={styles.cards_container}>
        {onpageContentData.map((data) => {
          return <ResultCard data={data} />;
        })}
      </div>
    </div>
  );
};

export default OnpageContent;
