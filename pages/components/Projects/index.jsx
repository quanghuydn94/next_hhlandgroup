import { Typography } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React from "react";
import CardItem from "../Card/CardItem";
import LayoutProject from "./Layout";

function ProjectsPage({ handleDetail }) {
  return (
    <LayoutProject>
      <Typography variant="h6">Dự án</Typography>
      {Array.from({ length: 5 }).map((item, index) => (
        <CardItem key={index} handleDetail={handleDetail} />
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

export default ProjectsPage;
