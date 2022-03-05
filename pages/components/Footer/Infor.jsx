import { Typography } from "@material-ui/core";
import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../../public/logo/company.svg";
import Image from "next/image";
import Link from "next/link";

function Infor() {
  return (
    <>
      <div className={styles.logo}>
        <Link href="/">
          <img src="/logo/company.svg" alt="" />
        </Link>
      </div>
      <div className={styles.items}>
        <Typography variant="h6">
          CÔNG TY CỔ PHẦN ĐẦU TƯ XÂY DỰNG VÀ THƯƠNG MẠI AN VẠN TÍN
        </Typography>
        {/* <Typography variant="body2">
          <span> Số ĐKKD:</span>
          0401780325 do Sở KHĐT Tp.Đà Nẵng cấp lần đầu ngày 29/07/2016
        </Typography> */}
        <Typography variant="body2">
          <span> Địa chỉ:</span>
          45 Trần Thủ Độ, Phường Điện Nam Bắc, Thị xã Điện Bàn, Tỉnh Quảng Nam,
          Việt Nam
        </Typography>
        <Typography variant="body2">
          <span> Người đại diện: </span>
          ông NGUYỄN VIẾT HÙNG
        </Typography>
        <Typography variant="body2">
          <span> Số điện thoại:</span>
          <Link href="tel:0905 184 219">0905 184 219</Link>
        </Typography>
        <Typography variant="body2">
          <span> Email:</span> Contact@gmail.com
        </Typography>
      </div>
    </>
  );
}

export default Infor;
