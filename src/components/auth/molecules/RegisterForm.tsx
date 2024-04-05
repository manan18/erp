"use client";
import React, { useState, useContext, useMemo } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Zoom, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { usernameExists } from "@/lib/auth";
import AuthContext from "@/contexts/AuthContext";

//assets
import logo from "@/assets/images/logo.png";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { CgUnavailable } from "react-icons/cg";
import { CiCircleCheck } from "react-icons/ci";
import { MoonLoader } from "react-spinners";

//components
import Input from "@/components/atoms/input";
import Button from "@/components/atoms/button";
import GoogleButton from "../atoms/google-button";
import Link from "next/link";

type UserData = {
  email: string;
  username: string;
  password: string;
  name: string;
  confirmPassword: string;
};

const RegisterForm = () => {
  const router = useRouter();
  const { register: signUp } = useContext(AuthContext);

  const usernameAvailableStatus = {
    Available: <CiCircleCheck className="text-green-500" />,
    Unavailable: <CgUnavailable className="text-red-500" />,
    Loading: <MoonLoader size={20} color="#818cf8" />,
  };

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [usernameStatus, setUsernameStatus] = useState<
    keyof typeof usernameAvailableStatus | null
  >(null);

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
      name: "",
      username: "",
      confirmPassword: "",
    },
  });

  const watchPassword = watch("password", "");
  const watchUsername = watch("username", "");

  useMemo(() => {
    if (watchUsername) {
      setUsernameStatus("Loading");
      usernameExists(watchUsername).then((res) => {
        setUsernameStatus(res ? "Unavailable" : "Available");
      });
    } else {
      setUsernameStatus(null);
    }
  }, [watchUsername]);

  const onSubmit = async (data: UserData) => {
    const { email, password, name, username } = data;
    try {
      setLoading(true);
      await signUp({ email, password, name, username });
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
      reset();
      router.push("/");
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
        placeholder="Username"
        className="bg-gray-800"
        adornment={{
          end: {
            icon: usernameStatus
              ? usernameAvailableStatus[usernameStatus]
              : null,
          },
        }}
        name="username"
        register={register}
        rules={{
          required: "This field is required",
          minLength: {
            value: 3,
            message: "Username should be at least 3 characters",
          },
          validate: (value) => {
            return (
              usernameStatus === "Available" || "Username is not available"
            );
          },
        }}
        error={!!errors.username}
        helperText={errors.username?.message}
      />
      <Input
        type="text"
        placeholder="Full Name"
        className="bg-gray-800"
        name="name"
        register={register}
        rules={{ required: "This field is required" }}
        error={!!errors.name}
        helperText={errors.name?.message}
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
