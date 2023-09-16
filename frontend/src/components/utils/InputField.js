import React, { useContext, useState } from "react";
import styles from "./InputField.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AppContext } from "../../context/application-context";
import screenshotAPI from "../../api/screenshotAPI";
import { useNavigate } from "react-router-dom";

const InputField = () => {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const navigate = useNavigate();

  const appCtx = useContext(AppContext);
  const setLoading = appCtx.setLoading;
  const setScreenshotUrl = appCtx.setScreenshotUrl;

  const submitHandler = async () => {
    setLoading(true);

    const screenshot_data = [
      {
        url: websiteUrl,
        full_page_screenshot: "false",
      },
    ];

    const screenshot = await screenshotAPI(screenshot_data);
    setScreenshotUrl(screenshot);
    navigate("/audit_report");
    setLoading(false);
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
