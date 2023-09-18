import React, { useContext } from "react";
import { Typography } from "@mui/material";
import styles from "./PageFunctions.module.css";
import FunctionsCard from "../utils/FunctionsCard";
import { AppContext } from "../../context/application-context";
import { check_description } from "../../data/checks_data_description";

const PageFunctions = () => {
  // accessing data from context api
  const appCtx = useContext(AppContext);
  const insightPageData = appCtx.insightPageData;

  // page functions data tranformation
  const insightPageRef = insightPageData?.tasks[0]?.result[0]?.items[0]?.checks;
  const checksData = [];

  for (const key in insightPageRef) {
    const obj = {
      status: "",
      title: "",
      description: "",
    };

    obj.title = key.replace(/\_/g, " ");
    obj.description = check_description[key];
    obj.status = insightPageRef[key] ? "ok" : "not_ok";

    const words = obj.title.split(" ");

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    words.join(" ");
    obj.title = words.join(" ");

    checksData.push(obj);
  }

  return (
    <div className={styles.page_results_container}>
      <Typography variant="h4" gutterBottom className={styles.heading}>
        Functional Analysis
      </Typography>
      <div className={styles.cards_container}>
        {checksData.map((data) => {
          return <FunctionsCard data={data} />;
        })}
      </div>
    </div>
  );
};

export default PageFunctions;
