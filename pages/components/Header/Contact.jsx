import { Grid, Typography } from "@material-ui/core";
import {
  Facebook,
  Instagram,
  MailOutline,
  WhatsApp,
  YouTube,
} from "@material-ui/icons";
import Link from "next/link";
import React from "react";
import styles from "./Contact.module.scss";
function Contact() {
  return (
    <Grid container justifyContent="center" className={styles.container}>
      <Grid item xs={12} className={styles.top}>
        <Typography>
          <span>
            <Link href="tel:0905 184 219">
              <WhatsApp className={styles.contact} />
            </Link>
            0905 184 219
          </span>
          <span className={styles.supportItem}>
            <MailOutline className={styles.contact} /> Contact@gmail.com
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
