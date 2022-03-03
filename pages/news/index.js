import { useRouter } from "next/router";
import React from "react";
import NewsPage from "../components/News";

function News() {
  const router = useRouter();
  const handleDetail = () => {
    router.push({ pathname: "/news/detail", query: 1 });
  };
  return (
    <>
      <NewsPage handleDetail={handleDetail} />
    </>
  );
}

export default News;
