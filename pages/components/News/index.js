import { Typography } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import CardItem from "../Card/CardItem";
import LayoutNews from "./Layout";
import datas from "../../constants/db.json";

const firstIndex = 0;

function NewsPage({ handleDetail }) {
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
    <LayoutNews>
      <Typography variant="h6">Tin tức</Typography>
      {data.map((news, index) => (
        <CardItem key={index} item={news} handleDetail={handleDetail} />
      ))}
      <Pagination
        color="secondary"
        count={Math.ceil(datas.length / pageSize)}
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </LayoutNews>
  );
}

export default NewsPage;
