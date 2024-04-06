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
    <div
      className="w-full sm:max-w-3xl max-w-[85vw] p-5 rounded-md shadow-md bg-white bg-opacity-10 backdrop-blur-lg border-2 border-white border-opacity-10"
      ref={containerRef}
    >
      
    </div>
  );
};

export default RegisterForm;
