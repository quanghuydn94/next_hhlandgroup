import React from "react";
import LayoutNews from "./Layout";
import styles from "./Detail.module.scss";
import { Typography } from "@material-ui/core";
import Link from "next/link";

function Detail() {
  return (
    <LayoutNews>
      <div className={styles.title}>
        <Typography variant="h4">
          <Link href="/news">Tin tức</Link>
          <span>&#8250;</span>
          <span>Chu kỳ của thị trường bất động sản</span>
        </Typography>
      </div>
      <div className={styles.content}>
        <p>
          Thị trường bất động sản luôn phát triển theo một chu kỳ, mỗi chu kỳ có
          thể kéo dài từ 7 đến 10 năm. Mọi diễn biến trong chu kỳ đều ảnh hưởng
          trực tiếp đến nền kinh tế như hệ thống tài chính, ngân hàng, xây dựng,
          vật liệu … Đối với các nhà đầu tư bất động sản, có thể nắm bắt được
          thông tin về những biến động trong mỗi giai đoạn của chu kỳ là rất
          quan trọng, vì nó quyết định đến việc bạn lựa chọn mua BĐS có đúng
          thời điểm hay không, giá có hợp lí nhất không. Điều này là yếu tố quan
          trọng quyết định đến khả năng thành bại của một thương vụ mua bán hay
          đầu tư.
        </p>
        <figure>
          <img
            loading="lazy"
            width="100%"
            height="100%"
            src="https://hhlandgroup.com.vn/wp-content/uploads/2022/02/Thiet-ke-khong-ten.png"
          />
          <noscript>
            <img
              loading="lazy"
              width="100%"
              height="100%"
              src="https://hhlandgroup.com.vn/wp-content/uploads/2022/02/Thiet-ke-khong-ten.png"
              alt=""
            />
          </noscript>
        </figure>
        <p>
          Có 5 giai đoạn trong chu kỳ của thị trường bất động sản, đó là: Giai
          đoạn Phục hồi (Giai đoạn đi lên); Giai đoạn tăng trưởng; Giai đoạn
          bong bóng (giai đoạn thị trường đạt đỉnh điểm); Giai đoạn suy thoái;
          Giai đoạn đóng băng. Những giai đoạn này còn tùy thuộc vào nhiều yếu
          tố tác động, ví dụ như:
        </p>
        <ul>
          <li>Tình hình phát triển của nền kinh tế vĩ mô.</li>
          <li>Mức độ hỗ trợ vay vốn mua bất động sản của ngân hàng.</li>
          <li>Các dự án hạ tầng trong khu vực.</li>
          <li>Biến động tăng / giảm giá bất động sản.</li>
          <li>Các loại bất động sản phù hợp nhu cầu người mua.</li>
        </ul>
        <figure class="aligncenter size-large">
          <img
            loading="lazy"
            width="100%"
            height="100%"
            src="https://hhlandgroup.com.vn/wp-content/uploads/2022/02/Chu_ky_bds2_1-1024x576.png"
          />
          <noscript>
            <img
              loading="lazy"
              width="100%"
              height="100%"
              src="https://hhlandgroup.com.vn/wp-content/uploads/2022/02/Chu_ky_bds2_1-1024x576.png"
              alt=""
            />
          </noscript>
        </figure>
        <h3>1. Giai đoạn Phục hồi (Giai đoạn đi lên)</h3>
        <p>
          Giai đoạn này nhà đầu tư bắt đầu cảm thấy tin tưởng hơn về thị trường,
          giá lúc này tăng nhẹ trở lại. Ngân hàng bắt đầu giảm lãi suất và cho
          vay mua bất động sản.&nbsp;Lúc này, các ngành liên quan như xây dựng,
          tín dụng ngân hàng cũng bắt đầu rục rịch sôi động trở lại. Các phương
          tiện truyền thông bắt đầu có những tin tức về sự biến đổi của thị
          trường. Các dự án thời gian bất động cũng bắt đầu được triển khai trở
          lại, giá bắt đầu tăng nhẹ.
          <br />
          Đóng băng đã đi qua, giai đoạn khó khăn nhất đã đi qua. Đây là thời
          điểm an toàn và rất thích hợp cho các nhà đầu tư tham gia vào thị
          trường bất động sản.
        </p>
        <h3>2. Giai đoạn tăng trưởng</h3>
        <p>
          Giá bắt đầu tăng mạnh, lúc này nhu cầu mua bất động sản rất phổ biến,
          các bất động sản được giao dịch với khối lượng cao, các sàn giao dịch,
          các văn phòng công chứng mọc lên hàng loạt và lúc nào cũng đông kín.
          Nhà nhà làm “cò đất”, người người làm “cò đất”, và phần lớn nhà đầu tư
          có thể chấp nhận mua với giá cao hơn giá chào bán. Ở giai đoạn này,
          các công trình được đầu tư xây dựng liên tục, vật liệu bán chạy, khiến
          giá vật liệu xây dựng tăng cao.
          <br />
          Bên cạnh đó, các ngân hàng đua nhau tung ra nhiều chính sách hỗ trợ
          vay vốn mua bất động sản. Giao dịch mua bán nhà đất diễn ra rất nhanh
          chóng và sôi động. Đây là thời điểm phù hợp cho các nhà đầu tư chào
          bán bất động sản của mình đã mua từ giai đoạn trước.
        </p>
        <h3>3 Giai đoạn bong bóng (giai đoạn thị trường đạt đỉnh điểm)</h3>
        <p>
          Thời điểm này các công trình xây dựng bị quá tải và giá quá cao, tỉ lệ
          đầu cơ lúc này cực cao. Lúc này do tỉ lệ đầu cơ quá cao khiến giá bất
          động sản tăng cao, lạm phát vì thế cũng tăng. Nhà nước bắt đầu rút
          tiền về bằng cách tăng lãi suất, các ngân hàng hạn chế hỗ trợ vay mua
          bất động sản.
          <br />
          Thị trường lúc này bắt đầu nhen nhóm sự suy giảm. Các nhà đầu tư mua
          thời điểm này nghĩa là họ đã mua ở giá cao nhất của chu kì.
        </p>
        <h3>4. Giai đoạn suy thoái</h3>
        <p>
          Thị trường bất động sản hạ nhiệt, nhiều nhà đầu tư rút khỏi thị
          trường, nhà đất trở nên khó bán, giao dịch đình trệ.&nbsp; Ngân hàng
          hạn chế cho nhà đầu tư và các cá nhân vay mua bất động sản. Tín dụng
          được siết chặt hơn bằng cách tăng lãi suất.&nbsp;
          <br />
          Giá lúc này thị trường bắt đầu giảm mạnh, hàng loạt nhà đầu cơ giai
          đoạn trước hoảng sợ tranh nhau bán tháo, thậm chí có những nơi giá lao
          dốc không phanh, tài sản bị tịch thu để thế nợ tràn ngập thị trường,
          người mua không dám mua bất động sản, gây ra sự tồn đọng.
        </p>
        <h3>5. Giai đoạn đóng băng</h3>
        <p>
          Giá giảm chạm đáy,thanh khoản thấp đỉnh điểm, thậm chí không có thanh
          khoản. thời điểm này nhiều nđt thông minh sẽ bắt đầu đi tìm kiếm, gom
          nhặt những viên kim cuơng đang ngủ say.
        </p>
        <p>
          Đây là thời điểm tốt để các nhà đầu tư tìm kiếm những bất động sản
          tốt, đợi đến khi thị trường được hâm nóng trở lại thì đó là cơ hội để
          họ làm giàu.
        </p>
        <p>
          <strong>Khi nào cơ hội 10 năm xuất hiện?</strong>
        </p>
        <p>
          Bất động sản là một lĩnh vực đi theo sát với chu kỳ của nền kinh tế,
          như vậy, với những diễn biến hiện tại thì chúng ta có thể dự đoán chu
          kỳ thứ 5 sắp kết thúc giai đoạn đóng băng và bước vào giai đoạn phục
          hồi.
        </p>
        <p>
          Thực sự rất khó cho bất cứ nhà kinh tế hay chuyên gia nào dự đoán
          chính xác đáy hay thời điểm bắt đầu hồi phục của thị trường. Tuy
          nhiên, dựa vào các thông số thu thập được (GDP, tốc độ đô thị hóa, tốc
          độ gia tăng dân số…), có thể đoán được thị trường đóng băng năm 2020 (
          giai đoạn Covid 19 đợt 1 &amp; 2), chạm đáy vào năm 2021 ( giai đoạn
          Covid 19 đợt 4), và bắt đầu được hâm nóng trở lại vào cuối năm 2021,
          đầu năm 2022.
        </p>
        <p>
          Việc dự báo chính xác trung, dài hạn với nền kinh tế nói chung và thị
          trường bất động sản nói riêng là nhiệm vụ bất khả thi đối với bất cứ
          chuyên gia hay tổ chức nào. Tuy nhiên với những số liệu đánh giá tiềm
          lực của Việt Nam, chúng ta có thể dự đoán giai đoạn 2020-2030 là một
          thập kỷ tăng trưởng mới của bất động sản.
        </p>
        <p>
          Nhìn lại toàn bộ thời kỳ lịch sử và các thời kỳ trên thế giới chiến
          tranh, loạn lạc, dịch bệnh, khủng hoảng tài chính, thì các kênh và các
          quỹ đầu tư sẽ chuyển sang loại hình trú ẩn chủ yếu như bất động sản.
        </p>
      </div>
      <div>
        <Typography variant="h5">Các tin khác</Typography>

        <div>
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
        <a class="other_new_readmore_btn">Xem thêm</a>
      </div>
    </LayoutNews>
  );
}

export default Detail;
