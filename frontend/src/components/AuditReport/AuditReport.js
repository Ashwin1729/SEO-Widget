import React, { useState, useEffect, useContext } from "react";
import styles from "./AuditReport.module.css";
import AuditScores from "./AuditScores";
import OnpageResults from "./OnpageResults";
import PageFunctions from "./PageFunctions";
import OnpageContent from "./OnpageContent";
import HeaderTag from "./HeaderTag";
import SpeedInsights from "./SpeedInsights";
import { AppContext } from "../../context/application-context";

const AuditReport = () => {
  // fetching context data
  const appCtx = useContext(AppContext);
  const insightPageData = appCtx.insightPageData;

  // fetching website url dynamically
  const websiteURL = insightPageData?.tasks[0]?.data?.url;

  return (
    <div className={styles.report_container}>
      <div className={styles.heading}>
        <div className={styles.title}>Everything you need to know</div>
        <div className={styles.url}>{`Results for ${websiteURL}`}</div>
      </div>
      <AuditScores />
      <OnpageResults />
      <PageFunctions />
      <HeaderTag />
      <OnpageContent />
      <SpeedInsights />
    </div>
  );
};

export default AuditReport;
