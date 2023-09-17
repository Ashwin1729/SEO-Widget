import React, { useState, useEffect } from "react";
import styles from "./AuditReport.module.css";
import AuditScores from "./AuditScores";
import OnpageResults from "./OnpageResults";
import PageFunctions from "./PageFunctions";
import OnpageContent from "./OnpageContent";
import HeaderTag from "./HeaderTag";
import SpeedInsights from "./SpeedInsights";

const AuditReport = () => {
  return (
    <div className={styles.report_container}>
      <div className={styles.heading}>
        <div className={styles.title}>Everything you need to know</div>
        <div className={styles.url}>
          Results for https://github.com/Ashwin1729/CryptoVerse
        </div>
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
