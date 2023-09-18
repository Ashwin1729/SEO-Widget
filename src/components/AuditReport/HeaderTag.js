import React, { useContext } from "react";
import styles from "./HeaderTag.module.css";
import HeaderCard from "../utils/HeaderCard";
import { Typography } from "@mui/material";
import { AppContext } from "../../context/application-context";

const HeaderTag = () => {
  // accessing data from context api
  const appCtx = useContext(AppContext);
  const insightPageData = appCtx.insightPageData;

  // h tags data tranformation
  const insightPageRef =
    insightPageData?.tasks[0]?.result[0]?.items[0]?.meta?.htags;
  const htagsData = [];

  for (const key in insightPageRef) {
    const obj = {
      number: "",
      tag: "",
      tag_data: [],
    };
    obj.tag_data = insightPageRef[key];
    obj.tag = key;
    obj.number = insightPageRef[key]?.length;

    htagsData.push(obj);
  }

  return (
    <div className={styles.tag_container}>
      <Typography variant="h4" gutterBottom className={styles.heading}>
        H Tags
      </Typography>
      <div className={styles.cards_container}>
        {htagsData.map((data) => {
          return (
            <HeaderCard
              data={{
                number: data.number,
                tag: data.tag,
                tag_data: data.tag_data,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HeaderTag;
