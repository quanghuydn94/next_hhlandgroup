import { Typography } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React from "react";
import CardItem from "../Card/CardItem";
import LayoutNews from "./Layout";

function NewsPage({ handleDetail }) {
  return (
    <LayoutNews>
      <Typography variant="h6">Tin tức</Typography>
      {Array.from({ length: 5 }).map((item, index) => (
        <CardItem key={index} handleDetail={handleDetail} />
      ))}
      <Pagination
        color="primary"
        count={5}
        variant="outlined"
        shape="rounded"
      />
    </LayoutNews>
  );
}

export default NewsPage;
