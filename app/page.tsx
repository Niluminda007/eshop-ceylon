"use client";

import ShopByCategory from "@/components/Home/ShopByCategory";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import ProductSliderHome from "@/components/ProductSliderHome/ProductSliderHome";
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
    <div className="w-full h-full bg-white">
      <AppProvider>
        <HomeSlider />
        <div className="w-full h-[400px] bg-white"></div>
        <ProductSliderHome />
      </AppProvider>
    </div>
  );
};

export default App;
