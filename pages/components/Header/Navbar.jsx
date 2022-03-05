import Link from "next/link";
import React, { useState } from "react";
import clsx from "clsx";
import styles from "./Navbar.module.scss";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useRouter } from "next/router";
function Navbar({isHideContact}) {
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
          link: "/project/trien-khai",
        },
        {
          title: "Dự án đã thanh khoản",
          link: "/project/thanh-khoan",
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
    <div className={clsx(styles.root, {
      [styles.hiddenContact] : isHideContact
    })} onMouseLeave={handleMouseLeave}>
      <div className={clsx(styles.header)}>
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
                          router.route == item.link + "/[...slug]" ||
                          router.route == item.link + "/[category]" ||
                          router.route == item.link + "/[category]/[...slug]",
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
                      router.route == item.link + "/[...slug]" ||
                      router.route == item.link + "/[category]" ||
                      router.route == item.link + "/[category]/[...slug]",
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
          <Link key={index} href={item.link}>
            <li>{item.title}</li>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
