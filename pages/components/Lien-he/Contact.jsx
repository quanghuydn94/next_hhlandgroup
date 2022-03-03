import Link from "next/link";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <div className={styles.Contact} style={{ marginTop: "100px" }}>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.125914347422!2d108.21977411438455!3d16.006959545356537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421a109a532faf%3A0x7235d62556cdb6d4!2zMjkzIELDuWkgVGhp4buHbiBOZ-G7mSwgSG_DoCBYdcOibiwgQ-G6qW0gTOG7hywgxJDDoCBO4bq1bmcgNTAzNTIsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1646222516081!5m2!1svi!2s"
          width="100%"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
      <div className={styles.ContactMain}>
        <h2>Liên Hệ</h2>
        <div className={styles.page_content_detail}>
          <p>
            <span>Công ty TNHH Bất động sản H&H Land</span>
          </p>
          <p>
            <strong>Trụ sở : </strong>H&H Tower, 382 Nguyễn Hữu Thọ, Khuê Trung,
            Cẩm Lệ, Đà Nẵng
          </p>
          <p>
            <strong>Điện thoại : </strong>
            <Link href="tel:023 66 55 97 79">023 66 55 97 79</Link>
          </p>
          <p>
            <strong>Email : </strong>
            <Link href="mailto:Contact@gmail.com">Contact@gmail.com</Link>
          </p>
        </div>
        <div className={styles.page_input}>
          <div className={styles.contact_txt}>
            <input
              type="text"
              placeholder="họ và tên"
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
              placeholder="họ và tên"
              className={styles.contact_txt_bg}
            />
          </div>
          <div className={styles.contact_txt}>
            <input
              type="text"
              placeholder="họ và tên"
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
        </div>
      </div>
    </div>
  );
}
