import { Typography } from "@material-ui/core";
import Link from "next/link";
import React from "react";
import LayoutProject from "./Layout";

function Detail() {
  return (
    <LayoutProject>
      <Typography variant="h6">
        <Link href="/project">Dự án</Link>
        <span>&#8250;</span>
        <span>Dự án Nam Hội An</span>
      </Typography>
    </LayoutProject>
  );
}

export default Detail;
