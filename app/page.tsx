"use client";

import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";

import { useState, useEffect } from "react";
import HomeContainter from "@/components/Home/HomeContainer";

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const loadingTimeOut = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(loadingTimeOut);
  }, []);

  return <>{isLoading ? <LoadingScreen /> : <HomeContainter />}</>;
};

export default App;
