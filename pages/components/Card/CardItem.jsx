import { Button, Typography } from "@material-ui/core";
import { ArrowRight } from "@material-ui/icons";
import React from "react";
import styles from "./CardItem.module.scss";

function CardItem({ handleDetail }) {
  return (
    <div className={styles.container} onClick={handleDetail}>
      <img
        src="https://hhlandgroup.com.vn/wp-content/uploads/2021/11/20190812093013-8653-300x169.jpg"
        alt=""
      />
      <div className={styles.content}>
        <Typography variant="h5">NGHĨA HÀNH NEW CENTER</Typography>
        <Typography variant="body2">
          Khu đô thị Nghĩa Hành New Center là dự án đất nền tọa lạc tại trung
          tâm Thị trấn Chợ Chùa. Sở hữu hơn 1km mặt tiền đường Phạm Văn Đồng
        </Typography>
        <Button className={styles.button}>
          <ArrowRight fontSize="small" className={styles.icon} /> Xem them
        </Button>
      </div>
    </div>
  );
}

export default CardItem;
