import { Button, Typography } from "@material-ui/core";
import Link from "next/link";
import React from "react";
import styles from "./Contact.module.scss";

function Contact() {
  return (
    <>
      <div className={styles.Contact}>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3836.5241681563725!2d108.25249281468236!3d15.933980388964676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142101bcd309407%3A0x8b52368156714a94!2zNDUgVHLhuqduIFRo4bunIMSQ4buZLCDEkGnhu4duIE5hbSBC4bqvYywgxJBp4buHbiBCw6BuLCBRdeG6o25nIE5hbSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2sus!4v1646448502229!5m2!1svi!2sus"
            width="100%"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
        <div className={styles.ContactMain}>
          <Typography variant="h2">Liên Hệ</Typography>
          <div className={styles.page_content_detail}>
            <Typography>
              <span>
                CÔNG TY CỔ PHẦN ĐẦU TƯ XÂY DỰNG VÀ THƯƠNG MẠI AN VẠN TÍN
              </span>
            </Typography>
            <Typography>
              <strong>Trụ sở : </strong>45 Trần Thủ Độ, Phường Điện Nam Bắc, Thị
              xã Điện Bàn, Tỉnh Quảng Nam, Việt Nam
            </Typography>
            <Typography>
              <strong>Điện thoại : </strong>
              <Link href="tel:0905 184 219">0905 184 219</Link>
            </Typography>
            <Typography>
              <strong>Email : </strong>
              <Link href="mailto:Contact@gmail.com">Contact@gmail.com</Link>
            </Typography>
          </div>
          <form className={styles.page_input}>
            <div className={styles.contact_txt}>
              <input
                type="text"
                placeholder="Họ và tên"
                className={styles.contact_txt_bg}
              />
            </div>
            <div className={styles.contact_txt}>
              <input
                type="text"
                placeholder="Email"
                className={styles.contact_txt_bg1}
              />
            </div>
            <div className={styles.contact_txt}>
              <input
                type="text"
                placeholder="Điện thoại"
                className={styles.contact_txt_bg}
              />
            </div>
            <div className={styles.contact_txt}>
              <input
                type="text"
                placeholder="Địa chỉ"
                className={styles.contact_txt_bg1}
              />
            </div>
            <div className={styles.contact_txt}>
              <textarea
                placeholder="Nội Dung "
                className={styles.contact_txta_bg}
              ></textarea>
            </div>
            <Button>Gởi</Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
