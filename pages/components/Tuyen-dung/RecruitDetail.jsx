import Link from "next/link";
import React from "react";
import styles from "./RecruitDetail.module.scss";

export default function RecruitDetail() {
  return (
    <div className={styles.Recruit}>
      <div className={styles.menu_left}>
        <div className={styles.title}>
          <h2>Giới thiệu</h2>
        </div>
        <ul>
          <li style={{ color: "var(--primary-color-)" }}>
            <Link href="/">Tin Tuyển dụng</Link>
          </li>
          <li style={{ color: "#666" }}>
            <Link href="/Lien-he">Thông tin liên hệ</Link>
          </li>
        </ul>
      </div>
      <div className={styles.content}>
        <div className={styles.page_title}>Tuyển Dụng</div>
        <div className={styles.page_content}>
          <div className={styles.page_contentDetail}>
            <h2>
              CHƯƠNG TRÌNH TUYỂN DỤNG LỚN NHẤT NĂM 2021 CỦA H&H LAND GROUP TẠI
              ĐÀ NẴNG
            </h2>
            <h3>Tuyển dụng mảng Kinh doanh dự án:</h3>

            <div>– 01 Trưởng phòng Kinh doanh</div>
            <div>– 20 Sale chuyên bán dự án</div>
          </div>
          <div>
            <img
              src="https://hhlandgroup.com.vn/wp-content/uploads/2021/07/TD-DN.jpg"
              width="100%"
            />
          </div>
          <h3>Tuyển dụng mảng Kinh doanh Thuê & Cho thuê:</h3>
          <div className={styles.page_contentDetail}>
            <div>– 01 Trưởng phòng Kinh doanh</div>
            <div>– 10 Sale mảng thuê và cho thuê</div>
          </div>
          <div>
            <img
              src="https://hhlandgroup.com.vn/wp-content/uploads/2021/07/Thue-Cho-thue.jpg"
              width="100%"
            />
          </div>
          <div className={styles.page_contentDetail}>
            <div>
              TRỞ THÀNH CHIẾN BINH SALE CỦA H&H LAND GROUP bạn sẽ được gì?
            </div>
            <div>
              – Thu nhập CỰC KHỦNG – KHÔNG GIỚI HẠN, tăng lương hàng năm theo
              năng lực.
            </div>
            <div>
              – Hoa hồng CAO NHẤT thị trường 30-100TR/ giao dịch + THƯỞNG NÓNG
            </div>
            <div>
              – Đào tạo kỹ năng bán hàng chuyên nghiệp, bài bản, kỹ năng
              marketing chuyên sâu hoàn toàn MIỄN PHÍ.
            </div>
            <div>
              – Thưởng Lễ, Tết, thưởng thi đua cuối năm cực hấp dẫn từ Công ty.
            </div>
            <div>
              – Thưởng các ngày lễ trong năm cho toàn bộ nhân viên, cho nhân
              viên nữ, con em của nhân viên.
            </div>
          </div>
          <div className={styles.page_contentDetail}>
            <div>BẠN CẦN NHỮNG GÌ?</div>
            <div>
              – Ưu tiên ứng viên đã có kinh nghiệm, chưa có kinh nghiệm sẽ được
              đào tạo từ đầu. năng lực.
            </div>
            <div>– Đam mê kinh doanh, kiếm tiền.</div>
            <div>– Có khả năng học hỏi nhanh, nhiệt tình với công việc.</div>
            <div>– Có Laptop và phương tiện đi lại</div>
          </div>
          <div className={styles.page_contentDetail}>
            <div>NỘP HỒ SƠ/CV TRỰC TIẾP VỀ ĐỊA CHỈ:</div>
            <div>
              – Tòa nhà H&H TOWER 382 Nguyễn Hữu Thọ, P. Khuê Trung, Q. Cẩm Lệ,
              TP. Đà Nẵng.
            </div>
            <div>– Email: hhlandgroup.dn@gmail.com</div>
            <div>– Hotline: 0357988138 – Ms Nguyên</div>
          </div>
        </div>
        <div className={styles.page_other}>
          <div className={styles.page_other_about}>
            <div className={styles.page_other_about1}>Các tin khác</div>
          </div>
          <div className={styles.news_other_item_bg}>
            <p>
              <Link href="/">
                H&H LAND GROUP TUYỂN DỤNG THÁNG 7/2021 – CN QUẢNG NGÃI
              </Link>
            </p>
            <p>
              <Link href="/">
                H&H LAND GROUP TUYỂN DỤNG THÁNG 7/2021 – CN QUẢNG NGÃI
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
