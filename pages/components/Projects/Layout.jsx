import { Grid, MenuItem } from "@material-ui/core";
import { ArrowRight } from "@material-ui/icons";
import Link from "next/link";
import React from "react";
import Banner from "../Banner/Banner";
import styles from "./Projects.module.scss";
import clsx from "clsx";
import { useRouter } from "next/router";
function LayoutProject({ children }) {
  const router = useRouter();
  const navLink = [
    { link: "/du-an/thanh-khoan", title: "Dự án đã thanh khoản" },
    { link: "/du-an/trien-khai", title: "Dự án đang triển khai" },
  ];
  return (
    <>
      <Banner />
      <Grid container justifyContent="center" className={styles.container}>
        <Grid item md={12} sm={12} xs={12}>
          <Grid container>
            <Grid item md={3} sm={4} className={styles.leftBar}>
              <div className={styles.listMenu}>
                {navLink.map((item, index) => (
                  <Link key={index} href={item.link}>
                    <MenuItem
                      className={clsx(styles.item, {
                        [styles.active]: router.asPath == item.link,
                      })}
                    >
                      {item.title}
                      <ArrowRight />
                    </MenuItem>
                  </Link>
                ))}
              </div>
            </Grid>
            <Grid item md={9} sm={8} xs={12} className={styles.rightBar}>
              {children}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default LayoutProject;
