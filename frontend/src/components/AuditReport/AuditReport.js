import React, { useState, useEffect } from "react";
import styles from "./AuditReport.module.css";
import AuditScores from "./AuditScores";
import OnpageResults from "./OnpageResults";
import PageFunctions from "./PageFunctions";

const AuditReport = () => {
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setPageScore((prevProgress) =>
  //       prevProgress >= 100 ? 0 : prevProgress + 10
  //     );
  //   }, 800);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

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
    </div>
  );
};

export default AuditReport;
