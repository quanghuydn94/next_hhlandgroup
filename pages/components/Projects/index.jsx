import { Typography } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React, { useState, useEffect } from "react";
import CardItem from "../Card/CardItem";
import LayoutProject from "./Layout";
import datas from "../../constants/db.json";

const firstIndex = 0;

function ProjectsPage({ handleDetail }) {
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
      <Typography variant="h6">Dự án</Typography>
      {data.map((project, index) => (
        <CardItem key={index} item={project} handleDetail={handleDetail} />
      ))}
      <Pagination
        color="secondary"
        count={Math.ceil(datas.length / pageSize)}
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </LayoutProject>
  );
}

export default ProjectsPage;
