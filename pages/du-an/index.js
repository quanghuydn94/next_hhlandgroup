import { useRouter } from "next/router";
import React from "react";
import ProjectsPage from "../components/Projects";

function Projects() {
  const router = useRouter();
  const handleDetail = (item) => {
    router.push({
      pathname: `/du-an/trien-khai/${item.title}`,
      query: item.id,
    });
  };
  return (
    <>
      <ProjectsPage handleDetail={handleDetail} />
    </>
  );
}

export default Projects;
