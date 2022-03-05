import React from "react";
import styles from "../styles/Home.module.css";

export default function NotFound() {
  return (
    <div className={styles.error}>
      <div>
        <h1>404</h1>
        <div
          style={{
            display: "inline-block",
            textAlign: "left",
            lineHeight: "49px",
            height: "49px",
            verticalAlign: "middle",
          }}
        >
          <h2
            style={{
              fontSize: "14px",
              fontWeight: "normal",
              margin: "0px",
              padding: "0px",
            }}
          >
            Không thể tìm thấy trang này
          </h2>
        </div>
      </div>
    </div>
  );
}
