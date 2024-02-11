"use client";

import CategoryBar from "@/components/Category/CategoryBar";
import { motion } from "framer-motion";

const homeVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1, type: "tween", stifness: "200", delay: 0.8 },
  },
};

type CategoryLayOutProps = {
  children: React.ReactNode;
};

const HomeLayOut = ({ children }: CategoryLayOutProps) => {
  return (
    <motion.div
      variants={homeVariants}
      initial="hidden"
      animate="visible"
      className="w-full  flex flex-col px-4 sm:px-16 py-2 sm:py-8 relative min-h-screen ">
      <CategoryBar />
      {children}
    </motion.div>
  );
};
export default HomeLayOut;
