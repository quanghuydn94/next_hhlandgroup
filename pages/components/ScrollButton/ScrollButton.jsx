import React from "react";
import Zoom from "@material-ui/core/Zoom";
import styles from "./ScrollButton.module.scss";

function ButtonToTop({ trigger, handleClick, children }) {
  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={styles.root}>
        {children}
      </div>
    </Zoom>
  );
}
export default ButtonToTop;
