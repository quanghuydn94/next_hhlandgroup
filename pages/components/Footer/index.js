import { Grid, Typography } from "@material-ui/core";
import React from "react";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <>
      <Grid container justifyContent="center" className={styles.wrapper}>
        <Grid item xs={10} className={styles.content}>
          <div className={styles.infor}>
            <Typography variant="h6">HLANDGROUP</Typography>
            <Typography variant="body2">
              Địa chỉ: H&H Tower, 382 Nguyễn Hữu Thọ, Khuê Trung, Cẩm Lệ, Đà
              Nẵng
            </Typography>
            <Typography variant="body2">
              Tel: <span> 023 66 55 97 79</span>
            </Typography>
            <Typography variant="body2">
              Copyright © 2021 HHLANDGROUP.COM.VN.
            </Typography>
          </div>
          <div className={styles.items}>
            <Typography>SƠ ĐỒ WEBSITE</Typography>
            <Typography>LIÊN HỆ</Typography>
            <Typography>THIẾT KẾ WEB BỞI VINH NGUYEN</Typography>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;
