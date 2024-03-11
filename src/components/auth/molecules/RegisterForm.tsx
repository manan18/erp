"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { signUp } from "@/lib/auth";
import { Zoom, toast } from "react-toastify";

//assets
import logo from "@/assets/images/logo.png";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

//components
import Input from "@/components/atoms/input";
import Button from "@/components/atoms/button";
import GoogleButton from "../atoms/google-button";
import Link from "next/link";

type UserData = {
  email: string;
  password: string;
  displayName: string;
  confirmPassword: string;
};

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<UserData>({
    defaultValues: {
      email: "",
      password: "",
      displayName: "",
      confirmPassword: "",
    },
  });

  const watchPassword = watch("password", "");

  const onSubmit = async (data: UserData) => {
    console.log(data);

    const { email, password, displayName } = data;
    try {
      setLoading(true);
      const user = await signUp(email, password, displayName);
      toast.success("Account created successfully", {
        position: "top-right",
        autoClose: 3000,
        transition: Zoom,
        icon: <span className="text-xl">🚀</span>,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(user);
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Error creating account", {
        position: "top-right",
        autoClose: 1000,
        transition: Zoom,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setLoading(false);
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
          register={register}
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
          rules={{
            required: "This field is required",
            validate: (value) =>
              value === watchPassword || "The passwords do not match",
          }}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
        />
      </div>
      <Button
        loading={loading}
        type="submit"
        className="bg-primary-purple mt-3"
      >
        Register
      </Button>
      <p className="text-gray-400 text-center">
        {" "}
        Already have an account?{" "}
        <Link href="/auth/login" className="text-primary-purple">
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
