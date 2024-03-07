"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { signUp } from "@/lib/auth";

//assets
import logo from "@/assets/images/logo.png";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

//components
import Input from "@/components/atoms/input";
import Button from "@/components/atoms/button";
import GoogleButton from "../atoms/google-button";

type UserData = {
  email: string;
  password: string;
  displayName: string;
};

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    defaultValues: {
      email: "",
      password: "",
      displayName: "",
    },
  });

  const onSubmit = async (data: UserData) => {
    console.log(data);
    const { email, password, displayName } = data;
    if (password !== confirmPassword) return;
    try {
      const user = await signUp(email, password, displayName);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-2 items-center">
        <Image src={logo} alt="logo" width={50} height={50} />
        <div className="flex flex-col gap-1">
          <h1 className="text-gray-200 text-2xl font-bold">
            Welcome to the Community 👋
          </h1>
          <h3 className="italic text-gray-400">
            Create an account to continue!
          </h3>
        </div>
      </div>
      <div className="flex space-x-4 justify-center">
        <GoogleButton />
      </div>
      <Input
        type="text"
        placeholder="Full Name"
        className="bg-gray-800"
        name="displayName"
        register={register}
        rules={{ required: "This field is required" }}
        error={!!errors.displayName}
        helperText={errors.displayName?.message}
      />
      <Input
        type="email"
        placeholder="Email"
        className="bg-gray-800"
        name="email"
        register={register}
        rules={{ required: "This field is required" }}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <div className="grid grid-cols-2 gap-3">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="bg-gray-800"
          name="password"
          register={register}
          adornment={{
            end: {
              icon: showPassword ? (
                <IoMdEyeOff
                  onClick={() => setShowPassword(!showPassword)}
                  className="cursor-pointer"
                />
              ) : (
                <IoMdEye
                  onClick={() => setShowPassword(!showPassword)}
                  className="cursor-pointer"
                />
              ),
            },
          }}
          rules={{ required: "This field is required" }}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Input
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Confirm Password"
          className="bg-gray-800"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          adornment={{
            end: {
              icon: showConfirmPassword ? (
                <IoMdEyeOff
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="cursor-pointer"
                />
              ) : (
                <IoMdEye
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="cursor-pointer"
                />
              ),
            },
          }}
          rules={{ required: "This field is required" }}
        />
      </div>
      <Button type="submit" className="bg-primary-purple mt-3">
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
