import { Grid, Typography } from "@material-ui/core";
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
    <Grid container justifyContent="center" className={styles.container}>
      <Grid item xs={10}>
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
      </Grid>
    </Grid>
  );
}

export default Contact;
