import React from "react";
import { Typography } from "@mui/material";
import styles from "./PageFunctions.module.css";
import FunctionsCard from "../utils/FunctionsCard";

const PageFunctions = () => {
  return (
    <div className={styles.page_results_container}>
      <Typography variant="h4" gutterBottom>
        Functional Analysis
      </Typography>
      <div className={styles.cards_container}>
        <FunctionsCard
          data={{
            status: "ok",
            title: "Duplicate Title",
            description:
              "Duplicate title tags are bad for SEO. They confuse search engines and make it harder to rank for specific keywords.",
          }}
        />
        <FunctionsCard
          data={{
            status: "not_ok",
            title: "Duplicate Title",
            description:
              "Duplicate title tags are bad for SEO. They confuse search engines and make it harder to rank for specific keywords.",
          }}
        />
        <FunctionsCard
          data={{
            status: "ok",
            title: "Duplicate Title",
            description:
              "Duplicate title tags are bad for SEO. They confuse search engines and make it harder to rank for specific keywords.",
          }}
        />
        <FunctionsCard
          data={{
            status: "not_ok",
            title: "Duplicate Title",
            description:
              "Duplicate title tags are bad for SEO. They confuse search engines and make it harder to rank for specific keywords.",
          }}
        />
        <FunctionsCard
          data={{
            status: "ok",
            title: "Duplicate Title",
            description:
              "Duplicate title tags are bad for SEO. They confuse search engines and make it harder to rank for specific keywords.",
          }}
        />
        <FunctionsCard
          data={{
            status: "ok",
            title: "Duplicate Title",
            description:
              "Duplicate title tags are bad for SEO. They confuse search engines and make it harder to rank for specific keywords.",
          }}
        />
      </div>
    </div>
  );
};

export default PageFunctions;
