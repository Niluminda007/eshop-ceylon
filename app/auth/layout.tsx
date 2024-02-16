"use client";

import React from "react";
import { motion } from "framer-motion";
import LoadingImage from "@/components/LoadingScreen/LoadingImage";

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <motion.div className="flex w-full h-full bg-black">
      <div className="w-full bg-black h-full flex items-center justify-center">
        <LoadingImage />
      </div>
      {children}
    </motion.div>
  );
};

export default AuthLayout;
