"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { auth } from "@/config/firebase.config";
import { signIn } from "@/lib/auth";
import AuthContext from "@/contexts/auth-context";

//assets
import logo from "@/assets/images/logo.png";
import { MdVerifiedUser, MdLock } from "react-icons/md";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

//components
import Input from "@/components/atoms/input";
import Button from "@/components/atoms/button";
import IconButton from "@/components/atoms/button/icon";

type UserData = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: UserData) => {
    const { email, password } = data;
    try {
      const userCredential = await signIn(email, password);
      console.log(userCredential);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <div className="flex items-center mb-5">
        <Image src={logo} alt="Logo" width={50} height={50} />
      </div>
      <h1 className="text-2xl font-semibold mb-2">Welcome back! 👋</h1>
      <small className="text-gray-500 text-sm">Sign in to your account</small>
      <form
        className="mt-5 flex flex-col gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(onSubmit)();
        }}
      >
        <Input
          placeholder="Email or Username"
          adornment={{
            start: {
              icon: <MdVerifiedUser size={20} />,
            },
          }}
          name="email"
          register={register}
          rules={{
            required: {
              value: true,
              message: "This field is required",
            },
          }}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <Input
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          adornment={{
            start: {
              icon: <MdLock size={20} />,
            },
            end: {
              icon: (
                <IconButton
                  onClick={(e) => setShowPassword(!showPassword)}
                  icon={
                    showPassword ? (
                      <IoMdEye size={20} />
                    ) : (
                      <IoMdEyeOff size={20} />
                    )
                  }
                />
              ),
            },
          }}
          register={register}
          name="password"
          rules={{
            required: {
              value: true,
              message: "This field is required",
            },
          }}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button type="submit" loading={false}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
