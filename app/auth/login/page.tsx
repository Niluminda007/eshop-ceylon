"use client";

import { userLoginValidationSchema } from "@/schemas/userLoginSchema";
import { UserLogin } from "@/types/types";
import React from "react";
import { Resolver, FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginContainer from "@/components/Login/LoginContainer";

const Login = () => {
  const loginForm = useForm<UserLogin>({
    resolver: yupResolver(userLoginValidationSchema) as Resolver<
      UserLogin,
      object
    >,
    mode: "onTouched",
  });
  return (
    <div className="w-full h-full flex items-center justify-center bg-black">
      <FormProvider {...loginForm}>
        <LoginContainer />
      </FormProvider>
    </div>
  );
};

export default Login;
