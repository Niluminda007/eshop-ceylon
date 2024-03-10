"use client";

import ShopByCategory from "@/components/Home/ShopByCategory";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import ProductSliderHome from "@/components/ProductSliderHome/ProductSliderHome";
import SpecialProductSliderArea from "@/components/SpecialProductSliderArea/SpecialProductSliderArea";
import AppProvider from "@/context/AppContext";
// import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";

// import { useState, useEffect } from "react";
// import { redirect } from "next/navigation";

// const App = () => {
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   useEffect(() => {
//     const loadingTimeOut = setTimeout(() => {
//       setIsLoading(false);
//     }, 3500);

//     return () => clearTimeout(loadingTimeOut);
//   }, []);
//   if (!isLoading) {
//     redirect("/home");
//   }

//   return (
//     <>
//       <LoadingScreen />
//     </>
//   );
// };

// export default App;

import React from "react";

const App = () => {
  return (
    <div className="w-full flex flex-col bg-white">
      <AppProvider>
        <HomeSlider />
        {/* <ProductSliderHome /> */}
        <SpecialProductSliderArea />
      </AppProvider>
    </div>
  );
};

export default App;
