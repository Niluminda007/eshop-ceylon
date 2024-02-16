"use client";

import RegisterContainer from "@/components/Register/RegisterContainer";
import { userRegisterValidationSchema } from "@/schemas/userRegisterSchema";
import { UserRegisterModel } from "@/types/types";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FormProvider, Resolver, useForm } from "react-hook-form";

const Register = () => {
  const registerForm = useForm<UserRegisterModel>({
    resolver: yupResolver(userRegisterValidationSchema) as Resolver<
      UserRegisterModel,
      object
    >,
    mode: "onTouched",
  });
  return (
    <div className="w-full h-full flex items-center justify-center bg-black">
      <FormProvider {...registerForm}>
        <RegisterContainer />
      </FormProvider>
    </div>
  );
};

export default Register;
