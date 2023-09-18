import React, { useState, useContext, useEffect } from "react";
import screenshot from "../../assets/screenshot.png";
import CircularProgress from "../utils/CircularProgressBar";
import { Typography } from "@mui/material";
import styles from "./AuditScores.module.css";
import { AppContext } from "../../context/application-context";
import { useCountUp } from "use-count-up";

const AuditScores = () => {
  // fetching context data
  const appCtx = useContext(AppContext);
  const screenshotUrl = appCtx.screenshotUrl;
  const insightPageData = appCtx.insightPageData;
  const lighthouseData = appCtx.lighthouseData;

  // scores hooks
  const [onPage, setOnPage] = useState(0);
  const [performance, setPerformance] = useState(0);
  const [seo, setSeo] = useState(0);
  const [bestPractices, setBestPractices] = useState(0);

  // defining scores for each SEO functionality ones they are fetched from API
  const onpageScore =
    insightPageData?.tasks[0]?.result[0]?.items[0]?.onpage_score;
  const performanceScore =
    lighthouseData?.tasks[0]?.result[0]?.categories?.performance?.score * 100;
  const seoScore =
    lighthouseData?.tasks[0]?.result[0]?.categories?.seo?.score * 100;
  const bestPracticesScore =
    lighthouseData?.tasks[0]?.result[0]?.categories["best-practices"]?.score *
    100;

  // count up hook for on page score
  const { value: onPageValue } = useCountUp({
    isCounting: true,
    end: onpageScore,
    duration: 5,
    easing: "easeOutCubic",
  });

  // count up hook for performance score
  const { value: performancevalue } = useCountUp({
    isCounting: true,
    end: performanceScore,
    duration: 5,
    easing: "easeOutCubic",
  });

  // count up hook for seo score
  const { value: seovalue } = useCountUp({
    isCounting: true,
    end: seoScore,
    duration: 5,
    easing: "easeOutCubic",
  });

  // count up hook for best practices score
  const { value: bestPracticesvalue } = useCountUp({
    isCounting: true,
    end: bestPracticesScore,
    duration: 5,
    easing: "easeOutCubic",
  });

  useEffect(() => {
    setOnPage(onPageValue);
    setPerformance(performancevalue);
    setSeo(seovalue);
    setBestPractices(bestPracticesvalue);
  }, [onPageValue, performancevalue, seovalue, bestPracticesvalue]);

  return (
    <div className={styles.score_container}>
      <div className={styles.screenshot}>
        <img src={screenshotUrl} alt="website_screenshot" />
      </div>
      <div className={styles.page_score}>
        <div className={styles.progress}>
          <CircularProgress
            value={onPage}
            style={{ width: "150px", height: "150px" }}
          />
          <Typography variant="h6" gutterBottom>
            On-Page Score
          </Typography>
        </div>
        <div className={styles.page_score_section}>
          <div className={styles.progress}>
            <CircularProgress
              value={performance}
              style={{ width: "80px", height: "80px" }}
            />
            <Typography variant="h6" gutterBottom className={styles.score_name}>
              Performance
            </Typography>
          </div>
          <div className={styles.progress}>
            <CircularProgress
              value={seo}
              style={{ width: "80px", height: "80px" }}
            />
            <Typography variant="h6" gutterBottom className={styles.score_name}>
              SEO
            </Typography>
          </div>
          <div className={styles.progress}>
            <CircularProgress
              value={bestPractices}
              style={{ width: "80px", height: "80px" }}
            />
            <Typography variant="h6" gutterBottom className={styles.score_name}>
              Best Practices
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditScores;
