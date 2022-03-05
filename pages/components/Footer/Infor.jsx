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
        <Typography variant="h6">CÔNG TY AN VẠN TÍN</Typography>
        <Typography variant="body2">
          <span> Số ĐKKD:</span>
          0401780325 do Sở KHĐT Tp.Đà Nẵng cấp lần đầu ngày 29/07/2016
        </Typography>
        <Typography variant="body2">
          <span> Địa chỉ:</span>
          Tầng 4, tòa nhà Thành Lợi, 249 Nguyễn Văn Linh, P.Vĩnh Trung, Q.Thanh
          Khê, Tp.Đà Nẵng, Việt Nam
        </Typography>
        <Typography variant="body2">
          <span> Người đại diện: </span>
          ông Trần Viết Ngọc
        </Typography>
        <Typography variant="body2">
          <span> Số điện thoại:</span>
          0919 71 00 55
        </Typography>
        <Typography variant="body2">
          <span> Email:</span> dvkh.brightland@gmail.com
        </Typography>
      </div>
    </>
  );
}

export default Infor;
