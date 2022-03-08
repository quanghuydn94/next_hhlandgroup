import { useRouter } from "next/router";
import React from "react";
import NewsPage from "../components/News";

function News() {
  const router = useRouter();
  const handleDetail = (item) => {
    router.push({ pathname: `/news/${item.title}`, query: item.id });
  };
  return (
    <>
      <NewsPage handleDetail={handleDetail} />
    </>
  );
}

export default News;
