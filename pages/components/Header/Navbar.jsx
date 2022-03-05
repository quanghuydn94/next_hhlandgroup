import { Grid, Typography, MenuItem } from "@material-ui/core";
import Link from "next/link";
import React, { useState } from "react";
import clsx from "clsx";
import styles from "./Navbar.module.scss";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Logo from "../../assets/logo.jpg";
import Image from "next/image";
import { useRouter } from "next/router";
function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isBars, setIsBars] = useState(false);
  const router = useRouter();
  const navs = [
    {
      link: "/",
      title: "Trang chủ",
    },
    {
      link: "/Gioi-thieu",
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
      link: "/Tuyen-dung",
      title: "Tuyển dụng",
    },
    {
      link: "/Lien-he",
      title: "Liên hệ",
    },
  ];
  useE

  const handleMouseOver = (index) => {
    if (index === 2) {
      setIsHovered(true);
    } else {
      setIsHovered(false);

    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClickNav = (index) => {
    setIsBars(false);
  };
  const handleToggle = () => {
    setIsBars(!isBars);
  };
  return (
    <div className={styles.root}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={clsx(styles.header)}
      >
        <div className={clsx(styles.container)}>
          <div className={styles.logo}>
            <Link href="/">
              <img src="/logo/company.svg" alt="" />
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
                        [styles.active]:
                          router.asPath == item.link ||
                          router.route == item.link + "/[...slug]",
                      })}
                    >
                      {item.title}
                    </h4>
                  </a>
                </Link>
                <div
                  className={clsx(styles.line, {
                    [styles.active]:
                      router.asPath == item.link ||
                      router.route == item.link + "/[...slug]",
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
      </div>
      <div
        className={clsx(styles.projectsList, {
          [styles.active]: isHovered,
        })}
      >
        {navs[2].list.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
