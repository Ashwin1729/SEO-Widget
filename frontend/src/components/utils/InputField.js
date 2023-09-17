import React, { useContext, useState } from "react";
import styles from "./InputField.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AppContext } from "../../context/application-context";
import screenshotAPI from "../../api/screenshotAPI";
import insightPageAPI from "../../api/insightPagesAPI";
import { lighthousePostAPI, lighthouseGetAPI } from "../../api/lighthouseAPI";
import { useNavigate } from "react-router-dom";

const InputField = () => {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const navigate = useNavigate();

  const appCtx = useContext(AppContext);
  const setLoading = appCtx.setLoading;
  const setScreenshotUrl = appCtx.setScreenshotUrl;
  const setInsightPageData = appCtx.setInsightPageData;
  const setLighthouseData = appCtx.setLighthouseData;

  const submitHandler = async () => {
    setLoading(true);

    const screenshot_data = [
      {
        url: websiteUrl,
        full_page_screenshot: "false",
      },
    ];

    const page_data = [
      {
        url: websiteUrl,
        enable_javascript: "true",
        enable_browser_rendering: "true",
        check_spell: "true",
      },
    ];

    const lighthouse_data = [
      {
        url: websiteUrl,
        for_mobile: true,
      },
    ];

    // // screenshot API
    // const screenshot = await screenshotAPI(screenshot_data);
    // setScreenshotUrl(screenshot);

    // // instantPagesAPI
    // const insightPageData = await insightPageAPI(page_data);
    // setInsightPageData(insightPageData);

    // lighthousePostAPI
    const postId = await lighthousePostAPI(lighthouse_data);
    console.log(postId);

    // lighthouseGetAPI
    const interval = setInterval(async () => {
      const lighthouseData = await lighthouseGetAPI(postId);
      if (
        lighthouseData &&
        lighthouseData?.tasks[0]?.status_message === "Ok." &&
        lighthouseData?.tasks[0]?.result[0]
      ) {
        setLighthouseData(lighthouseData);
        clearInterval(interval);
        setLoading(false);
      }
    }, 5000);

    navigate("/audit_report");
  };

  return (
    <div className={styles.input_container}>
      <TextField
        className={styles.input}
        id="standard-basic"
        label="Website URL"
        variant="standard"
        onChange={(event) => setWebsiteUrl(event.target.value)}
      />
      <div className={styles.send_button} onClick={submitHandler}>
        <Button variant="contained">Get SEO Audit</Button>
      </div>
    </div>
  );
};

export default InputField;
