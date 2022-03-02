import { Button, TextField, Typography } from "@material-ui/core";
import React from "react";
import styles from "./Footer.module.scss";
function FormNews() {
  return (
    <>
      <form action="" className={styles.form}>
        <Typography variant="h6">Đăng ký nhận tin tức</Typography>
        <TextField
          color="secondary"
          placeholder="Nhập email"
          size="small"
          fullWidth
        />
        <Button fullWidth className={`${styles.button}  `}></Button>
      </form>
    </>
  );
}

export default FormNews;
