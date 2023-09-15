import React from "react";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import styles from "./FunctionsCard.module.css";

const FunctionsCard = ({ data }) => {
  let icon;

  if (data.status === "ok") {
    icon = <TaskAltOutlinedIcon color="success" fontSize="large" />;
  } else if (data.status === "not_ok") {
    icon = <CancelOutlinedIcon sx={{ color: "red" }} fontSize="large" />;
  }

  return (
    <div className={styles.card_container}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.data_container}>
        <div className={styles.title}>{data.title}</div>
        <div className={styles.description}>{data.description}</div>
      </div>
    </div>
  );
};

export default FunctionsCard;
