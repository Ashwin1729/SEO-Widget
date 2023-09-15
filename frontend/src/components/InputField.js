import React from "react";
import styles from "./InputField.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const InputField = () => {
  return (
    <div className={styles.input_container}>
      <TextField
        className={styles.input}
        id="standard-basic"
        label="Website URL"
        variant="standard"
      />
      <Button className={styles.send_button} variant="contained">
        Get SEO Audit
      </Button>
    </div>
  );
};

export default InputField;