import { Grid } from "@material-ui/core";
import React from "react";
import styles from "./Footer.module.scss";
import FormNews from "./FormNews";
import Infor from "./Infor";
import Policy from "./Policy";

function Footer() {
  return (
    <>
      <div className={styles.wrapper}>
        <Grid container justifyContent="center" className={styles.container}>
          <Grid item md={5} sm={12} xs={12} className={styles.infor}>
            <Infor />
          </Grid>
          <Grid item md={3} sm={6} xs={12} className={styles.policy}>
            <Policy />
          </Grid>
          <Grid item md={3} sm={6} xs={12} className={styles.getNews}>
            <FormNews />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Footer;
