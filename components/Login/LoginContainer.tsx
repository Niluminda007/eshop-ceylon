"use client";

import { UserLogin } from "@/types/types";
import Link from "next/link";
import React from "react";
import { useFormContext } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";

const loginContainerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { ease: "linear", duration: 1 },
  },
};

const LoginContainer = () => {
  const { handleSubmit } = useFormContext<UserLogin>();
  const OnValid = async (data: UserLogin) => {
    // await logIn(data);
    // api call
  };
  return (
    <motion.div
      className="w-full h-full bg-white flex flex-col gap-4 items-center justify-center"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={loginContainerVariants}>
      <form
        autoComplete="off"
        onSubmit={handleSubmit(OnValid)}
        className="w-[60%] flex flex-col gap-8 justify-center items-center">
        <h1 className=" text-black text-[3rem] mb-8 font-bold">Login</h1>
        <div className="w-[80%] h-16 bg-transparent flex border-b-2 border-[rgba(0,0,0,.3)] px-2 py-8 items-center justify-center">
          <div className="w-[20%] h-16 flex items-center justify-center">
            <FaUser color="rgb(189,195,199)" fontSize="2rem" />
          </div>
          <input
            type="text"
            className="w-[80%] h-16 outline-none border-none text-black"
            placeholder="usernmae"
          />
        </div>
        <div className="w-[80%] h-16 bg-transparent flex border-b-2 border-[rgba(0,0,0,.3)] px-2 py-8 items-center justify-center">
          <div className="w-[20%] h-16 flex items-center justify-center">
            <FaLock color="rgb(189,195,199)" fontSize="2rem" />
          </div>
          <input
            type="password"
            className="w-[80%] h-16 outline-none border-none text-black"
            placeholder="password"
          />
        </div>
        <button className="w-[40%] h-12 px-8 py-4 rounded-lg outline-none border-none bg-black text-white flex justify-center items-center transition ease-linear hover:scale-110">
          Login
        </button>
      </form>
      <div className="mt-8  flex flex-col gap-2 justify-center items-center">
        <span className="text-black font-medium">Not Registered yet?</span>
        <Link
          href="/auth/register"
          className="text-[rgb(91,251,35)] font-medium stroke-black stroke-2">
          Register
        </Link>
      </div>
    </motion.div>
  );
};

export default LoginContainer;
