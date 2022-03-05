import { Fab } from "@material-ui/core";
import { CallRounded } from "@material-ui/icons";
import Link from "next/link";
import React from "react";
import styles from "./CallButton.module.scss";
function CallButton() {
  return (
    <div className={styles.callButton}>
      <Link href="tel:0905 184 219">
        <Fab size="small" className={styles.button}>
          <CallRounded fontSize="small" />
        </Fab>
      </Link>
    </div>
  );
}

export default CallButton;
