import React from "react";
import News from "./News";
import Projects from "./Projects";
import Slider from "./Slider";

function Home() {
  return (
    <div>
      <Slider />
      <Projects />
      <News />
    </div>
  );
}

export default Home;
