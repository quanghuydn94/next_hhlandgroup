import { Button, Typography } from "@material-ui/core";
import Link from "next/link";
import React from "react";
import LayoutProject from "./Layout";
import styles from "./Detail.module.scss";
import { Visibility } from "@material-ui/icons";
function Detail() {
  return (
    <LayoutProject>
      <div className={styles.title}>
        <Typography variant="h4">
          <Link href="/project">Dự án</Link>
          <span>&#8250;</span>
          <span>Dự án Nam Hội An</span>
        </Typography>
      </div>
      <div className={styles.content}>
        <h1>THE ĐIỆN NAM VILLAGE</h1>
        <p>
          <em>
            Toạ lạc ngay trung tâm phường Điện Nam – thị xã Điện Bàn – Tỉnh
            Quảng Nam,
            <strong className={styles.color}>The Điện Nam Village</strong>
            là một dự án đô thị trung tâm với vị trí trọng điểm mang tính chiến
            lược trong khớp nối phát triển theo quy hoạch đô thị định hướng phấn
            đấu trở thành thành phố vào năm 2020 của Điện Bàn.
          </em>
        </p>
        <h2>TỔNG QUAN DỰ ÁN</h2>
        <ul>
          <li>
            <strong className={styles.color}>Tên dự án:</strong>&nbsp;Làng Điện
            Nam Village
          </li>
          <li>
            <strong className={styles.color}>Chủ đầu tư:</strong>&nbsp;Công Ty
            TNHH Bất Động Sản Châu Âu (EU LAND)
          </li>
          <li>
            <strong className={styles.color}>Địa điểm:</strong>&nbsp;Khu đô thị
            mới Điện Nam – Điện ngọc, phường Điện Nam Trung, thị xã Điện Bàn,
            tỉnh Quảng Nam
          </li>
          <li>
            <strong className={styles.color}>Tổng diện tích:</strong>
            &nbsp;73,836m2
          </li>
          <li>
            <strong className={styles.color}>Diện tích phân lô:</strong>
            &nbsp;từ 75m2
          </li>
          <li>
            <strong className={styles.color}>Mật độ xây dựng:</strong>
            &nbsp;75% – 90%
          </li>
          <li>
            <strong className={styles.color}>Loại hình sản phẩm:</strong>
            &nbsp;Nhà phố, Nhà phố thương mại, Chung cư
          </li>
          <li>
            <strong className={styles.color}>Pháp lý:&nbsp;</strong>Sổ đỏ từng
            nền – Sở hữu lâu dài
          </li>
        </ul>
        <p>
          <img
            src="https://hhlandgroup.com.vn/wp-content/uploads/2021/04/465x333ra-mat-du-an-cantavil-eu-lam-chu-xu-huong-bat-dong-san-cong-nghiep-mien-tru-1594899052.jpg"
            alt=""
            width="100%"
            height="100%"
          />
          <noscript>
            <img
              src="https://hhlandgroup.com.vn/wp-content/uploads/2021/04/465x333ra-mat-du-an-cantavil-eu-lam-chu-xu-huong-bat-dong-san-cong-nghiep-mien-tru-1594899052.jpg"
              alt=""
              width="100%"
              height="100%"
            />
          </noscript>
        </p>
        <h2></h2>
        <h2>VỊ TRÍ DỰ ÁN</h2>
        <ul>
          <li>
            <strong className={styles.color}>Phía bắc</strong>: giáp Khu Công
            Nghiệp Xanh Điện Nam Điện Ngọc đông đúc (đây là khu công nghiệp xanh
            đầu tiên tại Miền Trung).
          </li>
          <li>
            <strong className={styles.color}>Phía nam:</strong>&nbsp;giáp với
            trục đường 33m nối thẳng từ dự án ra biển Hà My, Điện Dương.
          </li>
          <li>
            <strong className={styles.color}>Phía đông</strong>&nbsp;giáp với
            các dự án thuộc khu đô thị mới Điện Nam – Điện Ngọc
          </li>
          <li>
            <strong className={styles.color}>Phía tây:</strong>&nbsp;giáp đường
            Trần Đại Nghĩa – Nguyễn Tất Thành được mệnh danh là trục đường kinh
            tế nối liền Đà Nẵng và Hội An.
          </li>
        </ul>
        <h2>TIỆN ÍCH NỘI KHU</h2>
        <p>
          <img
            src="https://hhlandgroup.com.vn/wp-content/uploads/2021/04/chung-cu-dien-nam-village.jpg"
            alt=""
            width="100%"
            height="100%"
          />
          <noscript>
            <img
              src="https://hhlandgroup.com.vn/wp-content/uploads/2021/04/chung-cu-dien-nam-village.jpg"
              alt=""
              width="100%"
              height="100%"
            />
          </noscript>
        </p>
        <ul>
          <li>
            <strong className={styles.color}>Hệ thống trường học</strong>
            :&nbsp;được chú trọng hàng đầu, trường mẫu giáo chất lượng cao sở
            hữu cơ sở vật chất hiện đại, tiên tiến với diện tích lên đến 1.724
            m2, là nơi ươm mầm những tài năng tương lai, nơi mọi trẻ em được
            khơi dậy niềm đam mê khám phá thế giới và phát triển bản thân toàn
            diện; nơi các bậc phụ huynh hoàn toàn yên tâm, tin tưởng trao gửi
            con em mình.
          </li>
          <li>
            <strong className={styles.color}>Công viên trung tâm</strong>: với
            diện tích 3.700m2 gồm khu vui chơi trẻ em, khu tập thể dục cho người
            lớn và các hoạt động ngoài trời. Nơi bạn được căng tràn sức sống
            trong các hoạt động thể chất và được nâng niu trọn vẹn những cảm xúc
            bất tận trong sự kết nối hoàn hảo với cộng đồng toàn dự án.
          </li>
          <li>
            <strong className={styles.color}>2 Khối căn hộ chung cư</strong>:
            mang đến một quy hoạch mới rất đa dạng về hình thức cư trú, diện mạo
            hiện đại cho dự án. Bên cạnh đó, với khối đế (tầng 1 và 2) của chung
            cư dùng cho mục đích kinh doanh, thương mại sẽ làm cho khu đô thị
            Điện An Village có tiềm năng thu hút các hoạt động kinh doanh và
            thương mại.
          </li>
        </ul>
        <h2>TIỆN ÍCH NGOẠI KHU</h2>
        <p>
          Có vị thế chiến lược,&nbsp;
          <strong className={styles.color}>Điện Nam Village</strong>
          &nbsp;thừa hưởng tất cả những tiện ích vượt trội về cơ sở hạ tầng,
          giao thông thuận tiện và phát triển một cách đồng bộ, hứa hẹn một giá
          trị sống khác biệt, một giá trị đầu tư đẳng cấp.
        </p>
        <h1>HÌNH ẢNH THỰC TẾ</h1>
        <p>
          <img
            src="https://hhlandgroup.com.vn/wp-content/uploads/2021/04/2-1-1536x864-1.jpg"
            alt=""
            width="100%"
            height="100%"
          />
          <noscript>
            <img
              src="https://hhlandgroup.com.vn/wp-content/uploads/2021/04/2-1-1536x864-1.jpg"
              alt=""
              width="100%"
              height="100%"
            />
          </noscript>
        </p>
        <p>
          <img
            src="https://hhlandgroup.com.vn/wp-content/uploads/2021/04/15-1536x864-1.jpg"
            alt=""
            width="100%"
            height="100%"
          />
          <noscript>
            <img
              src="https://hhlandgroup.com.vn/wp-content/uploads/2021/04/15-1536x864-1.jpg"
              alt=""
              width="100%"
              height="100%"
            />
          </noscript>
        </p>
        <p>
          <img
            src="https://hhlandgroup.com.vn/wp-content/uploads/2021/04/22-1536x864-1.jpg"
            alt=""
            width="100%"
            height="100%"
          />
          <noscript>
            <img
              src="https://hhlandgroup.com.vn/wp-content/uploads/2021/04/22-1536x864-1.jpg"
              alt=""
              width="100%"
              height="100%"
            />
          </noscript>
        </p>
      </div>
      <div className={styles.relativeNews}>
        <Typography variant="h5">Tin liên quan</Typography>
        <div className={styles.linkNews}>
          <a href="https://hhlandgroup.com.vn/chinh-phu-giao-thanh-pho-da-nang-dau-tu-cang-lien-chieu/">
            CHÍNH PHỦ GIAO THÀNH PHỐ ĐÀ NẴNG ĐẦU TƯ CẢNG LIÊN CHIỂU
          </a>
          <a href="https://hhlandgroup.com.vn/cach-bat-mach-bong-bong-bat-dong-san-nam-2019/">
            CÁCH “BẮT MẠCH” BONG BÓNG BẤT ĐỘNG SẢN NĂM 2019
          </a>
        </div>
      </div>
      <div className={styles.anotherNews}>
        <Typography variant="h5">Các tin khác</Typography>

        <div className={styles.linkNews}>
          <a href="https://hhlandgroup.com.vn/chinh-phu-giao-thanh-pho-da-nang-dau-tu-cang-lien-chieu/">
            CHÍNH PHỦ GIAO THÀNH PHỐ ĐÀ NẴNG ĐẦU TƯ CẢNG LIÊN CHIỂU
          </a>
          <a href="https://hhlandgroup.com.vn/cach-bat-mach-bong-bong-bat-dong-san-nam-2019/">
            CÁCH “BẮT MẠCH” BONG BÓNG BẤT ĐỘNG SẢN NĂM 2019
          </a>

          <a href="https://hhlandgroup.com.vn/thua-dat-co-nhieu-nguoi-so-huu-cap-so-do-nhu-the-nao/">
            Thửa đất có nhiều người sở hữu, cấp sổ đỏ như thế nào?
          </a>

          <a href="https://hhlandgroup.com.vn/chuyen-gia-binh-chon-10-su-kien-bat-dong-san-tieu-bieu-nam-2018/">
            Chuyên gia bình chọn 10 sự kiện bất động sản tiêu biểu năm 2018
          </a>

          <a href="https://hhlandgroup.com.vn/da-nang-sau-con-lut-lich-su-nhieu-chuyen-bi-hai/">
            ĐÀ NẴNG SAU CƠN LỤT LỊCH SỬ – NHIỀU CHUYỆN BI HÀI
          </a>

          <a href="https://hhlandgroup.com.vn/bat-dong-san-nghi-duong-ven-bien-van-la-kenh-dau-tu-hieu-qua/">
            Bất động sản nghỉ dưỡng ven biển vẫn là kênh đầu tư hiệu quả
          </a>

          <a href="https://hhlandgroup.com.vn/phan-khuc-shophouse-dang-len-ngoi-loi-khuyen-nao-cho-nguoi-mua-nha/">
            Phân khúc shophouse đang lên ngôi, lời khuyên nào cho người mua nhà?
          </a>

          <a href="https://hhlandgroup.com.vn/xu-huong-dich-chuyen-dan-cu-da-nang/">
            XU HƯỚNG DỊCH CHUYỂN DÂN CƯ ĐÀ NẴNG
          </a>

          <a href="https://hhlandgroup.com.vn/khoi-thong-song-co-co-khoi-thong-diem-nghen-lien-ket-du-lich-da-nang-hoi-an/">
            KHƠI THÔNG SÔNG CỔ CÒ – KHƠI THÔNG “ĐIỂM NGHẼN” LIÊN KẾT DU LỊCH ĐÀ
            NẴNG – HỘI AN
          </a>

          <a href="https://hhlandgroup.com.vn/da-nang-dau-tu-2-du-an-ham-chui-tai-nut-giao-thong-phia-tay-cau-rong/">
            Đà Nẵng: Đầu tư 2 dự án hầm chui tại nút giao thông phía tây cầu
            Rồng
          </a>

          <a href="https://hhlandgroup.com.vn/co-living-va-co-working-dang-la-mang-an-tien-lon-tai-viet-nam/">
            Co-living và Co-working đang là mảng ăn tiền lớn tại Việt Nam
          </a>
        </div>
        <div className={styles.button}>
          <Visibility />
          <Button>Xem thêm</Button>
        </div>
      </div>
    </LayoutProject>
  );
}

export default Detail;
