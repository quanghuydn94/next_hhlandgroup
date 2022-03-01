import { Typography } from "@material-ui/core";
import {
  Facebook,
  Instagram,
  MailOutline,
  WhatsApp,
  YouTube,
} from "@material-ui/icons";
import React from "react";
import styles from "./Contact.module.scss";
function Contact() {
  return (
    <div className={styles.container}>
      <Typography>
        <span>
          <WhatsApp className={styles.contact} /> 0234 234 234
        </span>
        <span className={styles.supportItem}>
          <MailOutline className={styles.contact} /> alo@gmail.com
        </span>
        <span className={styles.supportItem}>
          <Facebook className={styles.socialMedia} />
          <Instagram className={styles.socialMedia} />
          <YouTube className={styles.socialMedia} />
        </span>
      </Typography>
    </div>
  );
}

export default Contact;
