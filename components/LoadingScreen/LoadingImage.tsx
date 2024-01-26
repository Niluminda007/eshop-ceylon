"use client";

import React from "react";
import CeylonLogo from "@/public/assets/ceylon-logo.svg";
import { motion } from "framer-motion";

const logoVariants = {
  hidden: { y: -200, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, type: "spring", stifness: "500" },
  },
};

const LoadingImage = () => {
  return (
    <motion.div variants={logoVariants} initial="hidden" animate="visible">
      <CeylonLogo width={400} height={400} />
    </motion.div>
  );
};

export default LoadingImage;
