import { Grid, Typography, MenuItem } from "@material-ui/core";
import Link from "next/link";
import React, { useState } from "react";
import clsx from "clsx";
import styles from "./Navbar.module.scss";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Logo from "./logo.jpg"
import Image from "next/image";
function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBars, setIsBars] = useState(false);

  const navs = [
    {
      link: "/",
      title: "Trang chủ",
    },
    {
      link: "/",
      title: "Giới thiệu",
    },
    {
      link: "/project",
      title: "Dự án",
      list: [
        {
          title: "Dự án đang triển khai",
          link: "/",
        },
        {
          title: "Dự án đã thanh khoản",
          link: "/",
        },
      ],
    },

    {
      link: "/news",
      title: "Tin tức",
    },
    {
      link: "/",
      title: "Tuyển dụng",
    },
    {
      link: "/",
      title: "Liên hệ",
    },
  ];

  const handleMouseOver = (index) => {
    if (index === 2) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClickNav = (index) => {
    setActiveIndex(index);
    setIsBars(false)
  };
  const handleToggle = () => {
    setIsBars(!isBars);
  };
  return (
<<<<<<< HEAD
    <div className={clsx(styles.header, {
      [styles.active]: isHovered,
    })}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={clsx(styles.container)}
      >
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src={Logo}
              alt=""
            />
          </Link>
        </div>
        <div
          className={clsx(styles.menu, {
            [styles.active]: isBars,
          })}
        >
          {navs.map((item, index) => (
            <li
              key={index}
              onMouseOver={() => handleMouseOver(index)}
              onClick={() => handleClickNav(index)}
            >
              <Link href={item.link}>
                <a>
                  <h4
                    className={clsx(styles.menuItem, {
                      [styles.active]: index === Number(activeIndex),
                    })}
                  >
                    {item.title}
                  </h4>
                </a>
              </Link>
              <div
                className={clsx(styles.line, {
                  [styles.active]: Number(activeIndex) === index,
                })}
              ></div>
            </li>
          ))}
        </div>

        <div
          className={clsx(styles.controls, {
            [styles.active]: isBars,
          })}
        >
          <div className={clsx(styles.btnMenu)} onClick={handleToggle}>
            {!isBars && (
              <MenuIcon
                style={{
                  margin: "auto",
                  color: "var(--primary-color-)",
                }}
              />
            )}
            {isBars && (
              <CloseIcon
                style={{
                  margin: "auto",
                  color: "var(--primary-color-)",
                }}
              />
            )}
          </div>
        </div>
      </div>
      <div className={clsx(styles.projectsList, {
        [styles.active]: isHovered,

      })}>
        {navs[2].list.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </div>
    </div>
=======
    <Grid container className={styles.container} justifyContent="center">
      <Grid item xs={3} className={styles.logo}>
        <Link href="/">
          <img src="/logo/company.svg" alt="" />
        </Link>
      </Grid>
      <Grid item xs={7} className={styles.menu}>
        <MenuItem>
          <Link href="/">Trang chủ</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/Gioi-thieu">Giới thiệu</Link>
        </MenuItem>
        <div className={styles.dropList}>
          <MenuItem>
            <Link href="/project"> Dự án</Link>
          </MenuItem>
          <div className={styles.dropdown}>
            <Typography>Dự án đang triển khai</Typography>
            <Typography>Dự an đã thanh khoản</Typography>
          </div>
        </div>
        <MenuItem>
          <Link href="/news"> Tin tức</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/"> Tuyển dụng</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/lien-he"> Liên hệ</Link>
        </MenuItem>
      </Grid>
    </Grid>
>>>>>>> 53e58f07f38f214d86967c0cc7840bf272734e1e
  );
}

export default Navbar;
