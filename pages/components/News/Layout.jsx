import { CardMedia, Grid, MenuItem } from "@material-ui/core";
import { ArrowRight } from "@material-ui/icons";
import Link from "next/link";
import React from "react";
import Banner from "../Banner/Banner";
import styles from "./News.module.scss";

function LayoutNews({ children }) {
  return (
    <>
      <Banner />
      <Grid container justifyContent="center" className={styles.container}>
        <Grid item xs={10}>
          <Grid container>
            <Grid item xs={3} className={styles.leftBar}>
              <div className={styles.listMenu}>
                <MenuItem className={styles.item}>
                  <Link href="/news">Tin tức</Link>
                  <ArrowRight />
                </MenuItem>
              </div>
            </Grid>
            <Grid item xs={9} className={styles.rightBar}>
              {children}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default LayoutNews;
