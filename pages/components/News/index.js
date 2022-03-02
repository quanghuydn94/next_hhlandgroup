import { Typography } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React from "react";
import CardItem from "../Card/CardItem";
import LayoutNews from "./Layout";

function NewsPage() {
  return (
    <LayoutNews>
      <Typography variant="h6">Tin tức</Typography>
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <Pagination
        color="primary"
        count={10}
        variant="outlined"
        shape="rounded"
      />
    </LayoutNews>
  );
}

export default NewsPage;
