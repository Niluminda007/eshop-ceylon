// import React, { useState } from "react";

// const demoItems = [1, 2, 3, 4, 5, 6, 7, 8];
// const itemsPerPage = 3;

// const ProductSliderHome = () => {
//   const [activePortion, setActivePortion] = useState<number>(0);

//   const handleLeft = () => {
//     setActivePortion((prevActivePortion) => Math.max(0, prevActivePortion - 1));
//   };

//   const handleRight = () => {
//     setActivePortion((prevActivePortion) =>
//       Math.min(
//         Math.ceil(demoItems.length / itemsPerPage) - 1,
//         prevActivePortion + 1
//       )
//     );
//   };

//   const translation = -(activePortion * (400 * itemsPerPage));
//   return (
//     <div className="w-full h-[30rem] bg-black flex items-center mb-[20rem] relative overflow-visible">
//       <div
//         style={{
//           transform: `translateX(${translation}px)`,
//           transition: "transform 0.5s ease",
//         }}
//         className="w-full h-[20rem] bg-yellow-400 flex items-center gap-20 px-20"
//       >
//         {demoItems.map((item, index) => (
//           <div
//             key={index}
//             className="w-[400px] h-[80%] bg-green-500 flex items-center justify-center text-3xl ease-linear transition"
//           >
//             {item}
//           </div>
//         ))}
//       </div>
//       <div className="absolute right-0 bottom-0 bg-green-400 flex items-center gap-4">
//         <button className="text-white size-8" onClick={handleLeft}>
//           &larr;
//         </button>
//         <button className="text-white size-8" onClick={handleRight}>
//           &rarr;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductSliderHome;

import { useFetchProductByCategory } from "@/hooks/useProducts";
import { ProductType } from "@/types/types";
import { CldImage } from "next-cloudinary";
import React, { useEffect, useState } from "react";
const demoItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sliderItemsFordesktop = 4;
const sliderItemWidth = 300;
const sliderMaxPages = Math.ceil(demoItems.length / sliderItemsFordesktop);

const ProductSliderHome = () => {
  const [activePortion, setActivePortion] = useState<number>(0);
  const handleLeft = () => {
    setActivePortion((prevState) => {
      if (prevState < 1) {
        return 0;
      }
      return prevState - 1;
    });
  };
  const handleRight = () => {
    setActivePortion((prevState) => {
      if (prevState == sliderMaxPages - 1) {
        return prevState;
      }
      return prevState + 1;
    });
  };
  const { fetchProductByCategory, isLoading, data } =
    useFetchProductByCategory();
  useEffect(() => {
    fetchProductByCategory("All");
  }, []);
  let featuredProducts: ProductType[] = [];
  if (data) {
    featuredProducts = data;
    featuredProducts = featuredProducts.slice(0, 10);
  }

  const translation = sliderItemsFordesktop * activePortion * sliderItemWidth;
  return (
    <div className="w-[84vw] h-full mx-auto relative overflow-hidden">
      <ul
        style={{ transform: `translateX(-${translation}px)` }}
        className="h-[20rem] list-none flex p-0 m-0 relative  transition ease-linear"
      >
        {featuredProducts.length > 0 &&
          featuredProducts.map((item, index) => (
            <li
              key={index}
              className="w-[300px] h-auto  flex items-center justify-center bg-yellow-400 flex-shrink-0 transition ease-linear"
            >
              <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
                <CldImage
                  src={item.images[0].url}
                  className="object-contain  transition-all ease-linear delay-200 "
                  alt={`${item.name}_image`}
                  width="200"
                  height="400"
                  format="webp"
                  quality="50"
                />
              </div>
            </li>
          ))}
      </ul>
      <div className="flex gap-2 absolute right-0 top-[50%]">
        <button
          onClick={handleLeft}
          className="w-8 h-4 flex items-center justify-center bg-white text-black rounded-md transition ease-linear hover:scale-[1.2]"
        >
          &larr;
        </button>
        <button
          onClick={handleRight}
          className="w-8 h-4 flex items-center justify-center bg-white text-black rounded-md transition ease-linear hover:scale-[1.2]"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default ProductSliderHome;
