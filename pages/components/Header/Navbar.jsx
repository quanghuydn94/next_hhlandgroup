import { Grid, Typography, MenuItem } from "@material-ui/core";
import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <Grid container className={styles.container} justifyContent="space-between">
      <Grid item xs={3} className={styles.logo}>
        <Link href="/">
          <img
            src="https://hhlandgroup.com.vn/wp-content/uploads/2021/04/logo_hhland_new2.png"
            alt=""
          />
        </Link>
      </Grid>
      <Grid item xs={7} className={styles.menu}>
        <MenuItem>
          <Link href="/">Trang chủ</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/">Giới thiệu</Link>
        </MenuItem>
        <div className={styles.dropList}>
          <MenuItem>
            <Link href="/"> Dự án</Link>
          </MenuItem>
          <div className={styles.dropdown}>
            <Typography>Dự án đang triển khai</Typography>
            <Typography>Dự an đã thanh khoản</Typography>
          </div>
        </div>
        <MenuItem>
          <Link href="/"> Tin tức</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/"> Tuyển dụng</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/"> Liên hệ</Link>
        </MenuItem>
      </Grid>
    </Grid>
  );
}

export default Navbar;
