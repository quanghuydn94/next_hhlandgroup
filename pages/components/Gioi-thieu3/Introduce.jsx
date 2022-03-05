import React, { useState } from "react";
import styles from "./introduce.module.scss";

export default function Introduce() {
  const [active, setActive] = useState(1);
  const handleClickNav = (index) => {
    setActive(index);
  };
  return (
<<<<<<< HEAD
    <div className={styles.introduce}>
      <div className={styles.page_introduce}>
        <ul>
          <div className={styles.page}>
            <div className={styles.title}>
              <h2>Giới thiệu</h2>
            </div>
            <li style={{ listStyle: "none" }} onClick={() => handleClickNav(1)}>
              <span
                className={
                  Number(active) === 1 ? styles.active_tabs : styles.tabs
                }
              >
                Giới thiệu chung
              </span>
            </li>
            <li style={{ listStyle: "none" }} onClick={() => handleClickNav(2)}>
              <span className={active === 2 ? styles.active_tabs : styles.tabs}>
                Tầm nhìn sứ mệnh
              </span>
            </li>
          </div>

=======
    <div className={styles.img_slider}>
      <img
        src="https://hhlandgroup.com.vn/wp-content/uploads/2019/06/duan.jpg"
        alt=""
        width="100%"
      />
      <div className={styles.introduce}>
        <div className={styles.page_introduce}>
          <ul>
            <div className={styles.page}>
              <div className={styles.title}>
                <h2>Giới thiệu</h2>
              </div>
              <li
                style={{ listStyle: "none" }}
                onClick={() => handleClickNav(1)}
              >
                <span
                  className={
                    Number(active) === 1 ? styles.active_tabs : styles.tabs
                  }
                >
                  Giới thiệu chung
                </span>
              </li>
              <li
                style={{ listStyle: "none" }}
                onClick={() => handleClickNav(2)}
              >
                <span
                  className={active === 2 ? styles.active_tabs : styles.tabs}
                >
                  Tầm nhìn sứ mệnh
                </span>
              </li>
            </div>

            <div className={styles.Staff}>
              <div
                className={
                  active === 1 ? styles.active_content : styles.content
                }
              >
                <div className={styles.page_title}>giới thiệu chung</div>
                <div className={styles.page_content}>
                  <h1>CÔNG TY TNHH AN VẠN TÍN</h1>
                  <div className={styles.profile}>
                    <div className={styles.media_left}>
                      <img
                        src="https://hhlandgroup.com.vn/wp-content/uploads/2021/06/z2565309661161_0a44523651231c3629d31545ca4e5b06-189x300.jpg"
                        alt="avatar"
                      />
                    </div>

<<<<<<< HEAD
>>>>>>> 2427e0d35397927270fa8275d033eaada8ff288c
          <div className={styles.Staff}>
            <div
              className={active === 1 ? styles.active_content : styles.content}
            >
              <div className={styles.page_title}>giới thiệu chung</div>
              <div className={styles.page_content}>
                <h1>
                  CÔNG TY CỔ PHẦN ĐẦU TƯ XÂY DỰNG VÀ THƯƠNG MẠI AN VẠN TÍN
                </h1>
                <div className={styles.profile}>
                  <div className={styles.media_left}>
                    <img src=" " alt="avatar" />
                  </div>

                  <div className={styles.media_body}>
                    <p>Ông NGUYỄN VIẾT HÙNG</p>
                    <p>
                      Giám đốc CÔNG TY CỔ PHẦN ĐẦU TƯ XÂY DỰNG VÀ THƯƠNG MẠI AN
                      VẠN TÍN
                    </p>
<<<<<<< HEAD
                  </div>
                </div>
                <div className={styles.gioithieucongty}>
                  <h3>LỊCH SỬ HÌNH THÀNH VÀ PHÁT TRIỂN</h3>
                  <p>
                    Công ty TNHH Bất Động Sản H&H Land (Tiền thân là Công ty
                    TNHH Hoàng Thông Hiệp) được thành lập vào ngày 29.09.2017,
                    dựa trên nền tảng giàu kinh nghiệm, trí tuệ và lòng nhiệt
                    huyết của lãnh đạo và tập thể với hơn 17 năm kinh nghiệm
                    trong ngành đầu tư, phân phối Bất động sản tại Đà Nẵng,
                    Quảng Nam và các tỉnh thành trên cả nước.{" "}
                  </p>
                  <p>
                    Ra đời với một quyết tâm cao, bởi vì năm ấy thị trường bất
                    động sản gần như đóng băng, nhưng với định hướng và nhận
                    định đúng đắn, lãnh đạo H&H Land Group với một lòng quyết
                    tâm, kiên gan, bền chí, sắc son đã đưa con tàu dám vượt thử
                    thách để đắp xây tương lai.
                  </p>
                  <p>
                    H&H Land Group là công ty chuyên đầu tư và phát triển bất
                    động sản tại Việt Nam. Thành lập từ năm 2017, trên chặng
                    đường hoạt động và phát triển, trải qua bao biến động, thăng
                    trầm và đầy thử thách, H&H Land với chiến lược phù hợp cùng
                    tư duy quản trị đúng đắn, tinh thần đoàn kết, nỗ lực của
                    toàn thể nhân viên, đã và đang vươn mình mạnh mẽ, tạo nên
                    dấu ấn đậm nét trên thị trường.
                  </p>
                  <p>
                    Là một doanh nghiệp hoạt động hơn 4 năm trong lĩnh vực Bất
                    động sản, Công Ty TNHH Bất Động Sản H&H Land lựa chọn cho
                    mình một hướng đi mới, vạch ra được những đường lối riêng
                    biệt đã nhanh chóng khẳng định được vị thế của mình trên thị
                    trường Bất động sản Việt Nam.
                  </p>
                  <p>
                    Tháng 4 năm 2021, H&H Land Group đã vinh dự đón nhận giải
                    thưởng Đơn vị phân phối và phát triển Bất động sản chất
                    lượng do Báo Đời sống & Pháp luật bình chọn và trao tặng.
                    Giải thưởng không chỉ ghi nhận những nỗ lực trong hoạt động
                    kinh doanh và đóng góp của Công Ty TNHH Bất Động Sản H&H
                    Land đối với xã hội, mà còn là động lực khích lệ để các
                    doanh nghiệp tiếp tục nỗ lực và hoạt động tích cực hơn cho
                    sự phát triển của đất nước, thể hiện sự công nhận của khách
                    hàng đối với các doanh nghiệp.
                  </p>
                  <p>
                    Với sự nỗ lực không ngừng của toàn thể nhân viên công ty
                    trong một năm qua, đây là chiến thắng lớn và là niềm tự hào
                    đối với Công Ty TNHH Bất Động Sản H&H Land nói chung và toàn
                    thể cán bộ, công nhân viên nói riêng. Giải thưởng này góp
                    phần nâng cao vị thế, năng lực cạnh tranh của Công ty và là
                    cơ sở vững chắc để khách hàng lựa chọn các sản phẩm do Công
                    Ty H&H Land đề ra và phát triển.
                  </p>
                  <div className={styles.video}>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/CO1yFjuu6CM"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  </div>
                  <h3>MỌI CHI TIẾT XIN VUI LÒNG LIÊN HỆ:</h3>
                </div>
              </div>
            </div>

            <div
              className={active === 2 ? styles.active_content : styles.content}
            >
              <div className={styles.page_title}>TẦM NHÌN & SỨ MỆNH</div>
              <div className={styles.page_content}>
                <h1>CÔNG TY TNHH BẤT ĐỘNG SẢN H&H LAND</h1>

                <ul style={{ paddingLeft: "1.5rem" }}>
                  <li>
                    <strong>Tầm nhìn:</strong>
                    <p>
                      Bằng khát vọng- đam mê cùng chiến lược phát triển bền
                      vững, H&H Land Group phấn đấu trở thành sàn giao dịch bất
                      động sản uy tín hàng đầu trong cả nước.
                    </p>
                    <p>
                      {" "}
                      H&H Land Group xây dựng và phát triển trên nền tảng lấy
                      con người làm trọng tâm quỹ đạo, lấy xã hội thịnh vượng
                      làm kim chỉ nam phấn đấu.
                    </p>
                    <p>
                      {" "}
                      * Tầm nhìn đến năm 2025 trở thành đơn vị phát triển bất
                      động sản uy tín và chuyên nghiệp
                    </p>
                    <p>
                      {" "}
                      * Tầm nhìn đến năm 2030 Trở thành chủ đầu tư dự án bất
                      động sản.
                    </p>
                  </li>
                  <p></p>
                  <li>
                    <strong>Sứ mệnh</strong>
                    <p>
                      Chúng tôi luôn khao khát được phát triển trên nên tảng lấy
                      đạo lý: VĂN- TƯ – TU làm đối trọng, nhằm nhằm tạo môi
                      trường làm việc năng động để thoả nhu cầu, kỳ vọng và ước
                      nguyện sự nghiệp thành đạt của CBNV H&H Land Group.
                    </p>
                    <p>
                      * Mang lại cho nhà đầu tư và tiêu dùng bất động sản sự
                      thoả mãn và an tâm tuyệt đối.
                    </p>
                    <p>
                      * Hướng đến một tương lai với giá trị và cuộc sống con
                      người là nền tảng cốt lõi tạo nên sự thịnh vượng của cộng
                      đồng và hạnh phúc của xã hội
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ul>
=======
=======
                    <div className={styles.media_body}>
                      <p>Ông Đinh Văn Hoàng</p>
                      <p>Tổng Giám đốc Công ty TNHH An Vạn Tín</p>
                    </div>
                  </div>
                  <div className={styles.gioithieucongty}>
                    <h3>LỊCH SỬ HÌNH THÀNH VÀ PHÁT TRIỂN</h3>
                    <p>
                      Công ty TNHH Bất Động Sản H&H Land (Tiền thân là Công ty
                      TNHH Hoàng Thông Hiệp) được thành lập vào ngày 29.09.2017,
                      dựa trên nền tảng giàu kinh nghiệm, trí tuệ và lòng nhiệt
                      huyết của lãnh đạo và tập thể với hơn 17 năm kinh nghiệm
                      trong ngành đầu tư, phân phối Bất động sản tại Đà Nẵng,
                      Quảng Nam và các tỉnh thành trên cả nước.{" "}
                    </p>
                    <p>
                      Ra đời với một quyết tâm cao, bởi vì năm ấy thị trường bất
                      động sản gần như đóng băng, nhưng với định hướng và nhận
                      định đúng đắn, lãnh đạo H&H Land Group với một lòng quyết
                      tâm, kiên gan, bền chí, sắc son đã đưa con tàu dám vượt
                      thử thách để đắp xây tương lai.
                    </p>
                    <p>
                      H&H Land Group là công ty chuyên đầu tư và phát triển bất
                      động sản tại Việt Nam. Thành lập từ năm 2017, trên chặng
                      đường hoạt động và phát triển, trải qua bao biến động,
                      thăng trầm và đầy thử thách, H&H Land với chiến lược phù
                      hợp cùng tư duy quản trị đúng đắn, tinh thần đoàn kết, nỗ
                      lực của toàn thể nhân viên, đã và đang vươn mình mạnh mẽ,
                      tạo nên dấu ấn đậm nét trên thị trường.
                    </p>
                    <p>
                      Là một doanh nghiệp hoạt động hơn 4 năm trong lĩnh vực Bất
                      động sản, Công Ty TNHH Bất Động Sản H&H Land lựa chọn cho
                      mình một hướng đi mới, vạch ra được những đường lối riêng
                      biệt đã nhanh chóng khẳng định được vị thế của mình trên
                      thị trường Bất động sản Việt Nam.
                    </p>
                    <p>
                      Tháng 4 năm 2021, H&H Land Group đã vinh dự đón nhận giải
                      thưởng Đơn vị phân phối và phát triển Bất động sản chất
                      lượng do Báo Đời sống & Pháp luật bình chọn và trao tặng.
                      Giải thưởng không chỉ ghi nhận những nỗ lực trong hoạt
                      động kinh doanh và đóng góp của Công Ty TNHH Bất Động Sản
                      H&H Land đối với xã hội, mà còn là động lực khích lệ để
                      các doanh nghiệp tiếp tục nỗ lực và hoạt động tích cực hơn
                      cho sự phát triển của đất nước, thể hiện sự công nhận của
                      khách hàng đối với các doanh nghiệp.
                    </p>
                    <p>
                      Với sự nỗ lực không ngừng của toàn thể nhân viên công ty
                      trong một năm qua, đây là chiến thắng lớn và là niềm tự
                      hào đối với Công Ty TNHH Bất Động Sản H&H Land nói chung
                      và toàn thể cán bộ, công nhân viên nói riêng. Giải thưởng
                      này góp phần nâng cao vị thế, năng lực cạnh tranh của Công
                      ty và là cơ sở vững chắc để khách hàng lựa chọn các sản
                      phẩm do Công Ty H&H Land đề ra và phát triển.
                    </p>
                    <div className={styles.video}>
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/CO1yFjuu6CM"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      ></iframe>
                    </div>
                    <h3>MỌI CHI TIẾT XIN VUI LÒNG LIÊN HỆ:</h3>
>>>>>>> 13eb10cf42fc2343c9204ef427f74bc682966704
                  </div>
                </div>
              </div>

              <div
                className={
                  active === 2 ? styles.active_content : styles.content
                }
              >
                <div className={styles.page_title}>TẦM NHÌN & SỨ MỆNH</div>
                <div className={styles.page_content}>
                  <h1>CÔNG TY TNHH BẤT ĐỘNG SẢN H&H LAND</h1>

                  <ul style={{ paddingLeft: "1.5rem" }}>
                    <li>
                      <strong>Tầm nhìn:</strong>
                      <p>
                        Bằng khát vọng- đam mê cùng chiến lược phát triển bền
                        vững, H&H Land Group phấn đấu trở thành sàn giao dịch
                        bất động sản uy tín hàng đầu trong cả nước.
                      </p>
                      <p>
                        {" "}
                        H&H Land Group xây dựng và phát triển trên nền tảng lấy
                        con người làm trọng tâm quỹ đạo, lấy xã hội thịnh vượng
                        làm kim chỉ nam phấn đấu.
                      </p>
                      <p>
                        {" "}
                        * Tầm nhìn đến năm 2025 trở thành đơn vị phát triển bất
                        động sản uy tín và chuyên nghiệp
                      </p>
                      <p>
                        {" "}
                        * Tầm nhìn đến năm 2030 Trở thành chủ đầu tư dự án bất
                        động sản.
                      </p>
                    </li>
                    <p></p>
                    <li>
                      <strong>Sứ mệnh</strong>
                      <p>
                        Chúng tôi luôn khao khát được phát triển trên nên tảng
                        lấy đạo lý: VĂN- TƯ – TU làm đối trọng, nhằm nhằm tạo
                        môi trường làm việc năng động để thoả nhu cầu, kỳ vọng
                        và ước nguyện sự nghiệp thành đạt của CBNV H&H Land
                        Group.
                      </p>
                      <p>
                        * Mang lại cho nhà đầu tư và tiêu dùng bất động sản sự
                        thoả mãn và an tâm tuyệt đối.
                      </p>
                      <p>
                        * Hướng đến một tương lai với giá trị và cuộc sống con
                        người là nền tảng cốt lõi tạo nên sự thịnh vượng của
                        cộng đồng và hạnh phúc của xã hội
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ul>
        </div>
>>>>>>> 2427e0d35397927270fa8275d033eaada8ff288c
      </div>
    </div>
  );
}
