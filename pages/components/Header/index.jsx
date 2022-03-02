import React from "react";
import Contact from "./Contact";
import Navbar from "./Navbar";
import styles from "./Header.module.scss";
import { Grid } from "@material-ui/core";

function Header() {
  return (
    <>
      <Contact />
      {/* <div className={styles.container}> */}
      <Navbar />
      {/* </div> */}
    </>
  );
}

export default Header;
