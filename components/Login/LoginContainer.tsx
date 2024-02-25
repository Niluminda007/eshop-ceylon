"use client";

import { CustomAxiosError, UserLogin } from "@/types/types";
import Link from "next/link";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { motion } from "framer-motion";
import createAxiosInstance from "@/utils/axiosInstance";
import { useRouter } from "next/navigation";
import Spinner from "../Loaders/Spinner";
import { toast } from "sonner";
import InputField from "../InputField/InputField";
import FormSubmitButton from "../FormSubmitButton/FormSubmitButton";

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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const OnValid = async (data: UserLogin) => {
    const axiosInstance = createAxiosInstance();
    try {
      setIsLoading(true);
      const response = await axiosInstance.post("/auth/login", data);
      if (response.status === 200) {
        router.push("/home");
      }
    } catch (error: any) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        console.error("An error occurred:", error);
        toast.error("An error occurred. Please try again later.");
      }
    } finally {
      setIsLoading(false);
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
        <InputField
          name="userName"
          placeHolderText="username"
          type="text"
          displayIcon={FaUser}
        />
        <InputField
          name="password"
          placeHolderText="password"
          type="password"
          displayIcon={FaLock}
        />
        {isLoading && (
          <Spinner size="2rem" color="black" loadingText="logging in" />
        )}
        <div
          className={`${
            isLoading ? "opacity-0" : "opacity-100"
          } ease-linear transition flex flex-col w-full justify-center items-center`}>
          <FormSubmitButton displayValue="Login" />
          <div className="mt-8  flex flex-col gap-2 justify-center items-center transition ease-linear">
            <span className="text-black font-medium">Not Registered yet?</span>
            <Link
              href="/auth/register"
              className="text-[rgb(91,251,35)] font-medium stroke-black stroke-2">
              Register
            </Link>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default LoginContainer;
