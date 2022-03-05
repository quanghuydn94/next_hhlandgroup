import { Button, Typography } from "@material-ui/core";
import Link from "next/link";
import React from "react";
import styles from "./Contact.module.scss";

function Contact() {
  return (
    <>
<<<<<<< HEAD
      <div className={styles.Contact}>
=======
      <div className={styles.img_banner}>
        <img
          src="https://hhlandgroup.com.vn/wp-content/uploads/2019/06/duan.jpg"
          alt=""
          width="100%"
        />
      </div>
      <div className={styles.Contact}>
<<<<<<< HEAD
>>>>>>> 2427e0d35397927270fa8275d033eaada8ff288c
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3836.5241681563725!2d108.25249281468236!3d15.933980388964676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142101bcd309407%3A0x8b52368156714a94!2zNDUgVHLhuqduIFRo4bunIMSQ4buZLCDEkGnhu4duIE5hbSBC4bqvYywgxJBp4buHbiBCw6BuLCBRdeG6o25nIE5hbSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2sus!4v1646448502229!5m2!1svi!2sus"
            width="100%"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
<<<<<<< HEAD
=======
=======
>>>>>>> 13eb10cf42fc2343c9204ef427f74bc682966704
>>>>>>> 2427e0d35397927270fa8275d033eaada8ff288c
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
<<<<<<< HEAD
=======
            <div className={styles.gg_map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.125914347422!2d108.21977411438455!3d16.006959545356537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421a109a532faf%3A0x7235d62556cdb6d4!2zMjkzIELDuWkgVGhp4buHbiBOZ-G7mSwgSG_DoCBYdcOibiwgQ-G6qW0gTOG7hywgxJDDoCBO4bq1bmcgNTAzNTIsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1646222516081!5m2!1svi!2s"
                width="100%"
                height="330px"
                loading="lazy"
              ></iframe>
            </div>
>>>>>>> 2427e0d35397927270fa8275d033eaada8ff288c
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
