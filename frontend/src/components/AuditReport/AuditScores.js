import React, { useContext } from "react";
import screenshot from "../../assets/screenshot.png";
import CircularProgress from "../utils/CircularProgressBar";
import { Typography } from "@mui/material";
import styles from "./AuditScores.module.css";
import { AppContext } from "../../context/application-context";

const AuditScores = () => {
  const appCtx = useContext(AppContext);
  const screenshotUrl = appCtx.screenshotUrl;

  return (
    <div className={styles.score_container}>
      <div className={styles.screenshot}>
        <img src={screenshotUrl} alt="website_screenshot" />
      </div>
      <div className={styles.page_score}>
        <div className={styles.progress}>
          <CircularProgress
            value={80}
            style={{ width: "100px", height: "100px" }}
          />
          <Typography variant="h6" gutterBottom>
            On-Page Score
          </Typography>
        </div>
        <div className={styles.progress}>
          <CircularProgress
            value={90}
            style={{ width: "100px", height: "100px" }}
          />
          <Typography variant="h6" gutterBottom>
            On-Page Score
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default AuditScores;
