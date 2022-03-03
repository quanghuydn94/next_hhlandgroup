import { Grid, Typography, MenuItem } from "@material-ui/core";
import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <Grid container className={styles.container} justifyContent="center">
      <Grid item xs={3} className={styles.logo}>
        <Link href="/">
          <img
            src="https://img.freepik.com/free-vector/real-estate-logo-design-template-home-vector-icon-symbol-illustrations_22857-726.jpg"
            alt=""
          />
        </Link>
      </Grid>
      <Grid item xs={7} className={styles.menu}>
        <MenuItem>
          <Link href="/">Trang chủ</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/Gioi-thieu">Giới thiệu</Link>
        </MenuItem>
        <div className={styles.dropList}>
          <MenuItem>
            <Link href="/project"> Dự án</Link>
          </MenuItem>
          <div className={styles.dropdown}>
            <Typography>Dự án đang triển khai</Typography>
            <Typography>Dự an đã thanh khoản</Typography>
          </div>
        </div>
        <MenuItem>
          <Link href="/news"> Tin tức</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/Tuyen-dung"> Tuyển dụng</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/Lien-he"> Liên hệ</Link>
        </MenuItem>
      </Grid>
    </Grid>
  );
}

export default Navbar;
