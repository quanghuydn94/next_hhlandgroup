import { Grid } from "@material-ui/core";
import React from "react";

import styles from "./styles.module.scss";

const projects = [
  {
    name: "khu chợ phố đêm nam trung",
    desc: "Khu phố chợ Điện Nam Trung là dự án đất nền nằm ngay trung tâm Chợ Điện Nam Trung – là khu vực chợ lớn và sầm uất tại phường Điện Nam Trung, huyện Điện Bàn, tỉnh Quảng Nam. Dự án nằm ngay trung tâm giao thương kết nối giữa trục 607A nối liền Thành phố Đà Nẵng và Phố cổ Hội An, ngay ngã tư Trần Đại Nghĩa – Võ Như Hưng với mật độ giao thông dày đặc.",
    img: "https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/nologo-aqua.jpg",
  },
  {
    name: "khu chợ phố đêm nam trung",
    desc: "Khu phố chợ Điện Nam Trung là dự án đất nền nằm ngay trung tâm Chợ Điện Nam Trung – là khu vực chợ lớn và sầm uất tại phường Điện Nam Trung, huyện Điện Bàn, tỉnh Quảng Nam. Dự án nằm ngay trung tâm giao thương kết nối giữa trục 607A nối liền Thành phố Đà Nẵng và Phố cổ Hội An, ngay ngã tư Trần Đại Nghĩa – Võ Như Hưng với mật độ giao thông dày đặc.",
    img: "https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/tgm.jpg",
  },
  {
    name: "khu chợ phố đêm nam trung",
    desc: "Khu phố chợ Điện Nam Trung là dự án đất nền nằm ngay trung tâm Chợ Điện Nam Trung – là khu vực chợ lớn và sầm uất tại phường Điện Nam Trung, huyện Điện Bàn, tỉnh Quảng Nam. Dự án nằm ngay trung tâm giao thương kết nối giữa trục 607A nối liền Thành phố Đà Nẵng và Phố cổ Hội An, ngay ngã tư Trần Đại Nghĩa – Võ Như Hưng với mật độ giao thông dày đặc.",
    img: "https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/nvw-pt.jpg",
  },
  {
    name: "khu chợ phố đêm nam trung",
    desc: "Khu phố chợ Điện Nam Trung là dự án đất nền nằm ngay trung tâm Chợ Điện Nam Trung – là khu vực chợ lớn và sầm uất tại phường Điện Nam Trung, huyện Điện Bàn, tỉnh Quảng Nam. Dự án nằm ngay trung tâm giao thương kết nối giữa trục 607A nối liền Thành phố Đà Nẵng và Phố cổ Hội An, ngay ngã tư Trần Đại Nghĩa – Võ Như Hưng với mật độ giao thông dày đặc.",
    img: "https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/lagoon-1600x1111.jpg",
  },
  {
    name: "khu chợ phố đêm nam trung",
    desc: "Khu phố chợ Điện Nam Trung là dự án đất nền nằm ngay trung tâm Chợ Điện Nam Trung – là khu vực chợ lớn và sầm uất tại phường Điện Nam Trung, huyện Điện Bàn, tỉnh Quảng Nam. Dự án nằm ngay trung tâm giao thương kết nối giữa trục 607A nối liền Thành phố Đà Nẵng và Phố cổ Hội An, ngay ngã tư Trần Đại Nghĩa – Võ Như Hưng với mật độ giao thông dày đặc.",
    img: "https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/nologo-centara.jpg",
  },
  {
    name: "khu chợ phố đêm nam trung",
    desc: "Khu phố chợ Điện Nam Trung là dự án đất nền nằm ngay trung tâm Chợ Điện Nam Trung – là khu vực chợ lớn và sầm uất tại phường Điện Nam Trung, huyện Điện Bàn, tỉnh Quảng Nam. Dự án nằm ngay trung tâm giao thương kết nối giữa trục 607A nối liền Thành phố Đà Nẵng và Phố cổ Hội An, ngay ngã tư Trần Đại Nghĩa – Võ Như Hưng với mật độ giao thông dày đặc.",
    img: "https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/beach.jpg",
  },
];
function Projects() {
  return (
    <div className={styles.root}>
      <div className={styles.projects}>
        <h2>Dự án</h2>
        <Grid container spacing={1}>
          {projects.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} className={styles.item}>
              <div className={styles.wrapper}>
                <div className={styles.image}>
                  <img src={item.img} alt={item.name} />
                  <h3>{item.name.toUpperCase()}</h3>
                </div>
                <p>{`${item.desc.slice(0, item.desc.slice(0, 150).lastIndexOf(" "))}...`}</p>
              </div>
            </Grid>
          ))}
        </Grid>
        <div className={styles.end}>
          <div className={styles.line}></div>
          <h5>Xem thêm</h5>
        </div>
      </div>
    </div>
  );
}

export default Projects;
