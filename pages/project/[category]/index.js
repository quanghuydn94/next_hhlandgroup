import { useRouter } from "next/router";
import React from "react";
import Category from "../../components/Projects/Category";

function ProjectCate() {
  const router = useRouter();
  return (
    <div>
      <Category pathName={router.asPath} />
    </div>
  );
}

export default ProjectCate;
