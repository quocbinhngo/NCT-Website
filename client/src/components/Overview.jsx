import React from "react";

const Overview = () => {
  const arr = [1, 1];

  return (
    <div className="mb-12 text-primary">
      <h1 className=" text-center text-4xl font-bold mb-14">
        Information Technology
      </h1>
      <h2 className="mb-4 font-medium text-xl sm:text-2xl md:text-3xl">
        Overview
      </h2>
      <div className="text-[#e7e7e7]">
        {arr.map((x) => (
          <p className="mb-2.5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            placeat velit accusantium dolorum labore consectetur libero
          </p>
        ))}
      </div>
    </div>
  );
};

export default Overview;
