import { Grid, Typography } from "@material-ui/core";
import {
  Facebook,
  Instagram,
  MailOutline,
  WhatsApp,
  YouTube,
} from "@material-ui/icons";
import clsx from "clsx";
import React from "react";
import styles from "./Contact.module.scss";
function Contact({isHideContact}) {
  return (
    <Grid container justifyContent="center" className={clsx(styles.container, {
      [styles.hidden]: isHideContact
    })}>
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
