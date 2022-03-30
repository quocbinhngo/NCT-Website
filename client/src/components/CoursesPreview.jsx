import React from "react";
import { Link } from "react-router-dom";

const CoursesPreview = () => {
  const renderCardList = () => {
    const arr = [1, 2, 3, 4];

    return (
      <>
        {arr.map((x) => (
          <div className="rounded-lg bg-white min-w-40 mx-auto ">
            <img
              src="/images/course-preview.jpg"
              alt="course preview img"
              className="object-cover"
            />
            <div className="px-2 py-2 text-right">
              <h3 className=" font-medium text-lg text-gray-700 text-left">
                Introduction to Programming
              </h3>
              <span className="text-primary ">COSC3245</span>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="mb-9">
      <h2 className="mb-4 text-primary font-semibold text-xl sm:text-2xl md:text-3xl ">
        IT Courses
      </h2>
      <div
        className="grid gap-6 "
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}
      >
        {renderCardList()}
      </div>
    </div>
  );
};

export default CoursesPreview;
