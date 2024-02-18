"use client";

import { UserLogin } from "@/types/types";
import Link from "next/link";
import React from "react";
import { useFormContext } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { motion } from "framer-motion";
import LoginInputField from "./LoginInputField";
import LoginSubmitButton from "./LoginSubmitButton";
import createAxiosInstance from "@/utils/axiosInstance";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const OnValid = async (data: UserLogin) => {
    const axiosInstance = createAxiosInstance();
    const { status } = await axiosInstance.post("/auth/login", data);
    if (status == 200) {
      router.push("/home");
    }
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
        <LoginInputField
          name="userName"
          placeHolderText="username"
          type="text"
          displayIcon={FaUser}
        />
        <LoginInputField
          name="password"
          placeHolderText="password"
          type="password"
          displayIcon={FaLock}
        />
        <LoginSubmitButton displayValue="Login" />
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
