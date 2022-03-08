import Link from "next/link";
import React from "react";
import styles from "./recruit.module.scss";
import tuyendung from "../../assets/tuyendung.jpg";

export default function Recruit({ handleDetail }) {
  return (
    <div>
      <div className={styles.img_banner}>
        {" "}
        <img src="/logo/tuyendung.jpg" alt="" width="100%" />
      </div>
      <div className={styles.Recruit}>
        <div className={styles.menu_left}>
          <div className={styles.title}>
            <h2>Giới thiệu</h2>
          </div>
          <ul>
            <li style={{ color: `var(--primary-color-)` }}>
              <Link href="/">Tin Tuyển dụng</Link>
            </li>
            <li style={{ color: "#666" }}>
              <Link href="/Lien-he">Thông tin liên hệ</Link>
            </li>
          </ul>
        </div>
        <div className={styles.content}>
          <div className={styles.page_title}>Tuyển Dụng</div>
          {Array.from({ length: 4 }).map((item, index) => (
            <div
              key={index}
              className={styles.project_item_bg}
              onClick={handleDetail}
            >
              <div className={styles.img_desc}>
                <img
                  src="https://hhlandgroup.com.vn/wp-content/uploads/2021/07/TD-QN-300x251.jpg"
                  alt=""
                />
              </div>
              <div className={styles.project_info}>
                <Link href="/Tuyen-dung/detail">
                  H&H LAND GROUP TUYỂN DỤNG THÁNG 7/2021 – CN QUẢNG NGÃI
                </Link>
                <div className={styles.split_bar_project}></div>
                <div className={styles.project_content}>
                  CHƯƠNG TRÌNH TUYỂN DỤNG LỚN NHẤT NĂM 2021 CỦA H&H […]
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
