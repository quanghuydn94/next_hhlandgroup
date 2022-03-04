import { Button, Fab } from "@material-ui/core";
import { CallRounded } from "@material-ui/icons";
import React from "react";
import styles from "./CallButton.module.scss";
function CallButton() {
  return (
    <div className={styles.callButton}>
      <Fab size="small" className={styles.button}>
        <CallRounded fontSize="small" />
      </Fab>
    </div>
  );
}

export default CallButton;
