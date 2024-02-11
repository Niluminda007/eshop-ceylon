"use client";

import Header from "@/components/Header/Header";
import AppProvider from "@/context/AppContext";

type HomeLayOutProps = {
  children: React.ReactNode;
};

const HomeLayOut = ({ children }: HomeLayOutProps) => {
  return (
    <div className="w-full flex flex-col bg-white min-h-screen ">
      <Header />
      <AppProvider>{children}</AppProvider>
    </div>
  );
};
export default HomeLayOut;
