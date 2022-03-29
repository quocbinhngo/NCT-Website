import React from "react";
import CoursesPreview from "../components/CoursesPreview";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <CoursesPreview />
      <CoursesPreview />
      <CoursesPreview />
      <CoursesPreview />
    </div>
  );
};

export default Home;
