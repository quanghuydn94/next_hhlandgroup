import { Typography } from "@material-ui/core";
import { Facebook, YouTube } from "@material-ui/icons";
import React from "react";
import styles from "./Footer.module.scss";

function Policy() {
  return (
    <>
      <div className={styles.content}>
        <Typography>Chính sách bảo mật</Typography>
        <Typography>Chính sách mua hàng</Typography>
        <div className={styles.icons}>
          <Facebook />
          <YouTube />
        </div>
        {/* <img src="https://brightland.vn/Images/logoSaleNoti.png" alt="" /> */}
      </div>
    </>
  );
}

export default Policy;
