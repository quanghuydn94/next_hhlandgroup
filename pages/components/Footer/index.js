import { Grid, Link, Typography } from "@material-ui/core";
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
          <Grid item md={6} sm={12} xs={12} className={styles.infor}>
            <Infor />
          </Grid>
          <Grid item md={6} sm={12} xs={12} className={styles.getNews}>
            <FormNews />
          </Grid>
        </Grid>
        <div className={styles.copyRight}>
          <Typography paragraph>
            Copyright <sup>&#169;</sup> 2019 - 2022 An Vạn Tín. Site by:
            <Link href="https://tipici.vn/" target="_blank">
              Tipici
            </Link>
          </Typography>
        </div>
      </div>
    </>
  );
}

export default Footer;
