import React, { useEffect } from "react";
import News from "./News";
import Projects from "./Projects";
import Slider from "./Slider";
import { useWindowScroll } from "react-use";
function Home() {
  const { y: pageYOffset } = useWindowScroll();
  // useEffect(() => {
  //   setTimeout(() => {
  //     if (pageYOffset === 0) {
  //       window.scrollTo({ top: 560, behavior: "smooth" });
  //     }
  //   }, [5000]);
  // }, [pageYOffset]);
  return (
    <div>
      <Slider />
      <Projects />
      <News />
    </div>
  );
}

export default Home;
