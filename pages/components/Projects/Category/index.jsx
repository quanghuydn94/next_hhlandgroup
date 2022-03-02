import { Typography } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React from "react";
import CardItem from "../../Card/CardItem";
import LayoutProject from "../Layout";

function Category({ pathName }) {
  return (
    <LayoutProject>
      {pathName === "/project/thanh-khoan" && (
        <Typography variant="h6">Dự án đã thanh khoản</Typography>
      )}
      {pathName === "/project/trien-khai" && (
        <Typography variant="h6">Dự án đang triển khai</Typography>
      )}

      {Array.from({ length: 5 }).map((item, index) => (
        <CardItem key={index} />
      ))}
      <Pagination
        color="primary"
        count={10}
        variant="outlined"
        shape="rounded"
      />
    </LayoutProject>
  );
}

export default Category;
