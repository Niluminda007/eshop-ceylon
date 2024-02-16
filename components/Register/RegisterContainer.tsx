"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
const registerContainerVariants = {
  hidden: {
    y: +1000,
  },
  visible: {
    y: 0,
    transition: { type: "tween", stiffness: "500", duration: 0.9 },
  },
};

const RegisterContainer = () => {
  return (
    <motion.div
      key={"box2"}
      className="w-full h-full bg-white flex flex-col gap-4 items-center justify-center"
      initial="hidden"
      animate="visible"
      variants={registerContainerVariants}>
      <form
        autoComplete="off"
        className="w-[60%] flex flex-col gap-8 justify-center items-center">
        <h1 className=" text-black text-[3rem] mb-8 font-bold">Register</h1>
      </form>
    </motion.div>
  );
};

export default RegisterContainer;
