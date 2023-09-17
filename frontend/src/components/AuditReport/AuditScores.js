import React, { useContext } from "react";
import screenshot from "../../assets/screenshot.png";
import CircularProgress from "../utils/CircularProgressBar";
import { Typography } from "@mui/material";
import styles from "./AuditScores.module.css";
import { AppContext } from "../../context/application-context";

const AuditScores = () => {
  const appCtx = useContext(AppContext);
  const screenshotUrl = appCtx.screenshotUrl;
  const insightPageData = appCtx.insightPageData;

  const onpageScore =
    insightPageData?.tasks[0]?.result[0]?.items[0]?.onpage_score;

  console.log(onpageScore);

  return (
    <div className={styles.score_container}>
      <div className={styles.screenshot}>
        <img src={screenshot} alt="website_screenshot" />
      </div>
      <div className={styles.page_score}>
        <div className={styles.progress}>
          <CircularProgress
            value={80}
            style={{ width: "150px", height: "150px" }}
          />
          <Typography variant="h6" gutterBottom>
            On-Page Score
          </Typography>
        </div>
        <div className={styles.page_score_section}>
          <div className={styles.progress}>
            <CircularProgress
              value={90}
              style={{ width: "80px", height: "80px" }}
            />
            <Typography variant="h6" gutterBottom>
              Performance
            </Typography>
          </div>
          <div className={styles.progress}>
            <CircularProgress
              value={90}
              style={{ width: "80px", height: "80px" }}
            />
            <Typography variant="h6" gutterBottom>
              SEO
            </Typography>
          </div>
          <div className={styles.progress}>
            <CircularProgress
              value={90}
              style={{ width: "80px", height: "80px" }}
            />
            <Typography variant="h6" gutterBottom>
              Best Practices
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditScores;
