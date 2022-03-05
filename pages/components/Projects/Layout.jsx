import { CardMedia, Grid, MenuItem } from "@material-ui/core";
import { ArrowRight } from "@material-ui/icons";
import Link from "next/link";
import React from "react";
import Banner from "../Banner/Banner";
import styles from "./Projects.module.scss";

function LayoutProject({ children }) {
  return (
    <>
      <Banner />
      <CardMedia
        className={styles.image}
        image="https://hhlandgroup.com.vn/wp-content/uploads/2019/06/duan.jpg"
      />
      <Grid container justifyContent="center" className={styles.container}>
        <Grid item md={12} sm={12} xs={12}>
          <Grid container>
            <Grid item md={3} sm={4} className={styles.leftBar}>
              <div className={styles.listMenu}>
                <MenuItem className={styles.item}>
                  <Link href="/project/thanh-khoan">Dự án đã thanh khoản</Link>
                  <ArrowRight />
                </MenuItem>
                <MenuItem className={styles.item}>
                  <Link href="/project/trien-khai"> Dự án đang triển khai</Link>

                  <ArrowRight />
                </MenuItem>
              </div>
            </Grid>
            <Grid item md={9} sm={8} xs={12} className={styles.rightBar}>
              {children}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default LayoutProject;
