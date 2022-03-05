import { Button, Divider, Typography } from "@material-ui/core";
import { ArrowRight } from "@material-ui/icons";
import React from "react";
import styles from "./CardItem.module.scss";

function CardItem({ handleDetail, item }) {
  return (
    <div className={styles.container} onClick={() => handleDetail(item)}>
      <div className={styles.image}
        style={{
          backgroundImage: `url(${item.image})`
        }}
      ></div>
        
      {/* <img src={item.image} alt="" /> */}
      <div className={styles.content}>
        <Typography variant="h5">{item.title}</Typography>
        <Typography variant="body2">{item.address}</Typography>
        <Divider className={styles.divider} />
        <Typography variant="body2">
          {`${item.description.slice(0, item.description.slice(0, 150).lastIndexOf(" "))}...`}
        </Typography>
        <Button className={styles.button}>
          <ArrowRight fontSize="small" className={styles.icon} /> Xem thêm
        </Button>
      </div>
    </div>
  );
}

export default CardItem;
