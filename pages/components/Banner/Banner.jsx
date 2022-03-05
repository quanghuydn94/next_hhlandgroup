import React from "react";
import { CardMedia } from "@material-ui/core";
import styles from "./Banner.module.scss";
function Banner() {
  return (
    <>
      <CardMedia
        className={styles.image}
        image="https://hhlandgroup.com.vn/wp-content/uploads/2019/06/duan.jpg"
      />
    </>
  );
}

export default Banner;
