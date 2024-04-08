"use client";
import React, { useState, useContext, useMemo, useRef } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Zoom, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { usernameExists } from "@/lib/auth";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AuthContext from "@/contexts/AuthContext";

//assets
import logo from "@/assets/images/logo.png";
import bannerimage from "@/assets/images/signup-banner.jpg";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { CgUnavailable } from "react-icons/cg";
import { CiCircleCheck } from "react-icons/ci";
import { MoonLoader } from "react-spinners";

//components
import Input from "@/components/atoms/input";
import Button from "@/components/atoms/button";
import GoogleButton from "../atoms/google-button";
import Link from "next/link";
import RadioGroup from "../atoms/radio";

type UserData = {
  email: string;
  username: string;
  password: string;
  name: string;
  confirmPassword: string;
  gender: "Male" | "Female" | null;
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
  const containerRef = useRef(null);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<UserData>({
    defaultValues: {
      email: "",
      gender: null,
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

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(containerRef.current, {
      width: 0,
      duration: 0.6,
    });
  }, [containerRef.current]);

  const onSubmit = async (data: UserData) => {
    const { email, password, name, username } = data;
    try {
      console.log(data);
      // await signUp({ email, password, name, username });
      // toast.success("Account created successfully", {
      //   position: "top-right",
      //   autoClose: 3000,
      //   transition: Zoom,
      //   icon: <span className="text-xl">🚀</span>,
      //   hideProgressBar: true,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      // });
      // reset();
      // router.push("/");
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

  const radioOptions = [
    {
      value: "Male",
      label: "Male",
    },
    {
      value: "Female",
      label: "Female",
    },
  ];

  return (
    <div
      className="w-full bg-white sm:max-w-6xl max-w-[85vw] min-h-[200px] rounded-md shadow-lg border border-white grid grid-cols-2"
      ref={containerRef}
    >
      <div className="p-3">
        <div className="flex space-x-4 items-center">
          <Image src={logo} alt="logo" width={50} height={50} />
          <div className="flex flex-col space-y-1">
            <h1 className="text-2xl text-pallete1-headersmall font-semibold">
              Welcome to Startup Sync
            </h1>
            <p className="text-sm text-pallete1-headercaption">
              Enter your details to get started
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 mt-5 px-8 py-4"
        >
          <Input
            type="text"
            placeholder="Username"
            name="username"
            register={register}
            required
            adornment={{
              end: {
                icon: usernameStatus
                  ? usernameAvailableStatus[usernameStatus]
                  : null,
              },
            }}
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
          />
          <div className="grid grid-cols-2 gap-6">
            <Input
              type="text"
              placeholder="First Name"
              name="firstName"
              register={register}
            />
            <Input
              type="text"
              placeholder="Last Name"
              name="lastName"
              register={register}
            />
          </div>
          <Input
            type="email"
            placeholder="Email"
            register={register}
            name="email"
            required
          />
          <div className="grid grid-cols-2 gap-6">
            <Input
              type="text"
              placeholder="Password"
              name="password"
              register={register}
            />
            <Input
              type="text"
              placeholder="Confirm Password"
              name="confirmPassword"
              register={register}
            />
          </div>
          <RadioGroup
            options={radioOptions}
            label="Gender"
            name="gender"
            register={register}
          />
          <Button type="submit" loading={loading}>
            Sign Up
          </Button>
        </form>
      </div>
      <div className="bg-[url(/images/signup-banner.jpg)] bg-cover bg-center rounded-r-md p-5"></div>
    </div>
  );
};

export default RegisterForm;
