"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import InputField from "../InputField/InputField";
import { FaAddressBook, FaLock, FaPhone, FaUser } from "react-icons/fa";
import { FaMailchimp } from "react-icons/fa6";
import FormSubmitButton from "../FormSubmitButton/FormSubmitButton";
import { useFormContext } from "react-hook-form";
import { UserRegisterModel } from "@/types/types";
import createAxiosInstance from "@/utils/axiosInstance";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Spinner from "../Loaders/Spinner";
const registerContainerVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20,
    },
  },
};

const RegisterContainer = () => {
  const { handleSubmit } = useFormContext<UserRegisterModel>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const OnValid = async (data: UserRegisterModel) => {
    const axiosInstance = createAxiosInstance();
    try {
      setIsLoading(true);
      const response = await axiosInstance.post("/auth/register", data);
      if (response.status == 201) {
        toast.success("User Created Successfully");
        router.push("/auth/login");
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
      variants={registerContainerVariants}>
      <form
        autoComplete="off"
        className="w-[80%] flex flex-col gap-8 justify-center items-center p-4  rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
        onSubmit={handleSubmit(OnValid)}>
        <h1 className="text-black text-3xl mb-8 font-bold ">Register</h1>
        <InputField
          name="name"
          placeHolderText="Full Name"
          displayIcon={FaUser}
          type="text"
        />
        <InputField
          name="userName"
          placeHolderText="Username"
          displayIcon={FaUser}
          type="text"
        />
        <InputField
          name="password"
          placeHolderText="Password"
          displayIcon={FaLock}
          type="password"
        />
        <InputField
          name="confirmPassword"
          placeHolderText="Confirm Password"
          displayIcon={FaLock}
          type="password"
        />
        <InputField
          name="telephone"
          placeHolderText="Telephone"
          displayIcon={FaPhone}
          type="tel"
        />
        <InputField
          name="email"
          placeHolderText="Email Address"
          displayIcon={FaMailchimp}
          type="email"
        />
        <InputField
          name="address"
          placeHolderText="Address"
          displayIcon={FaAddressBook}
          type="text"
        />
        <div
          className={`${
            isLoading ? "opacity-0" : "opacity-100"
          } ease-linear transition flex flex-col w-full justify-center items-center`}>
          <FormSubmitButton displayValue="Register" />
          {isLoading && (
            <Spinner loadingText="registering user" color="black" size="2rem" />
          )}
        </div>
      </form>
    </motion.div>
  );
};

export default RegisterContainer;
