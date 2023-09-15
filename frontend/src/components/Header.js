import React from "react";
import styles from "./Header.module.css";
import growthfyi_logo from "../assets/growthfyi_logo.svg";

const Header = () => {
  return (
    <div className={styles.header_container}>
      <img className={styles.logo} src={growthfyi_logo} alt="growthfyi_logo" />
      <div className={styles.title}>Growthfyi</div>
    </div>
  );
};

export default Header;
