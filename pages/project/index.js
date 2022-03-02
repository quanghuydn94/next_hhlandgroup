import { useRouter } from "next/router";
import React from "react";
import ProjectsPage from "../components/Projects";

function Projects() {
  const router = useRouter();
  const handleDetail = () => {
    router.push({ pathname: "/project/trien-khai/detail", query: 1 });
  };
  return (
    <>
      <ProjectsPage handleDetail={handleDetail} />
    </>
  );
}

export default Projects;
