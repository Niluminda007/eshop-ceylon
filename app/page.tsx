"use client";

import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";
import HomePage from "@/components/Home/HomePage";
import { useState, useEffect } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // useEffect(() => {
  //   const loadingTimeOut = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3500);

  //   return () => clearTimeout(loadingTimeOut);
  // }, []);

  return <>{isLoading ? <LoadingScreen /> : <HomePage />}</>;
};

export default App;
