import React, { useState } from "react";

const demoItems = [1, 2, 3, 4, 5, 6, 7, 8];
const itemsPerPage = 3; // Number of items displayed per page

const ProductSliderHome = () => {
  const [activePortion, setActivePortion] = useState<number>(0);

  const handleLeft = () => {
    setActivePortion((prevActivePortion) => Math.max(0, prevActivePortion - 1));
  };

  const handleRight = () => {
    setActivePortion((prevActivePortion) =>
      Math.min(
        Math.ceil(demoItems.length / itemsPerPage) - 1,
        prevActivePortion + 1
      )
    );
  };

  const translation = -(activePortion * (400 * itemsPerPage)); // Assuming each item has a fixed width of 400px

  return (
    <div className="w-full h-[30rem] bg-black flex items-center mb-[20rem] relative">
      <div
        style={{
          transform: `translateX(${translation}px)`,
          transition: "transform 0.5s ease",
        }}
        className="h-[20rem] bg-yellow-400 flex items-center gap-20 px-20">
        {demoItems.map((item, index) => (
          <div
            key={index}
            className="w-[400px] h-[80%] bg-green-500 flex items-center justify-center text-3xl ease-linear transition">
            {item}
          </div>
        ))}
      </div>
      <div className="absolute right-0 bottom-0 bg-green-400 flex items-center gap-4">
        <button className="text-white size-8" onClick={handleLeft}>
          &larr;
        </button>
        <button className="text-white size-8" onClick={handleRight}>
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default ProductSliderHome;
