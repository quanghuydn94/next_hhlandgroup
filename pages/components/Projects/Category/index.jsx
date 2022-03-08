import { Typography } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React, { useState, useEffect } from "react";
import CardItem from "../../Card/CardItem";
import LayoutProject from "../Layout";
import datas from "../../../constants/db.json";
const firstIndex = 0;

function Category({ pathName, handleDetail }) {
  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(1);
  const [data, setData] = useState(datas.slice(firstIndex, pageSize));
  useEffect(() => {
    setData(datas.slice(0, pageSize));
  }, [pageSize]);
  const handleChange = (event, value) => {
    setPage(value);
    setData(datas.slice(firstIndex + pageSize * (value - 1), pageSize * value));
  };
  return (
    <LayoutProject>
      {pathName === "/du-an/thanh-khoan" && (
        <Typography variant="h6">Dự án đã thanh khoản</Typography>
      )}
      {pathName === "/du-an/trien-khai" && (
        <Typography variant="h6">Dự án đang triển khai</Typography>
      )}

      {data.map((project, index) => (
        <CardItem key={index} item={project} handleDetail={handleDetail} />
      ))}
      <Pagination
        color="primary"
        count={Math.ceil(datas.length / pageSize)}
        variant="outlined"
        shape="rounded"
        page={page}
        onChange={handleChange}
      />
    </LayoutProject>
  );
}

export default Category;
