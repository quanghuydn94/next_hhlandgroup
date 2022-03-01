import React from "react";
import Contact from "./Contact";
import Navbar from "./Navbar";
import styles from "./Header.module.scss";
import { Grid } from "@material-ui/core";

function Header() {
  return (
    <>
      <Grid container justifyContent="center" className={styles.container}>
        <Grid item xs={10}>
          <Contact />
          <Navbar />
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
