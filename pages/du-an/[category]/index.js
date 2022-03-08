import { useRouter } from "next/router";
import React from "react";
import Category from "../../components/Projects/Category";

function ProjectCate() {
  const router = useRouter();
  const handleDetail = (item) => {
    router.push({
      pathname: `/du-an/trien-khai/${item.title}`,
      query: item.id,
    });
  };
  return (
    <div>
      <Category pathName={router.asPath} handleDetail={handleDetail} />
    </div>
  );
}

export default ProjectCate;
