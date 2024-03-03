"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { auth, db } from "@/config/firebase.config";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

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
  confirmPassword: string;
  firstName: string;
  lastName: string;
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: UserData) => {
    console.log(data);

    const { email, password, confirmPassword, firstName, lastName } = data;
    if (password !== confirmPassword) return;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          email,
          firstName,
          lastName,
        });
      }
      console.log("User Created");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <div className="flex items-center mb-5">
        <Image src={logo} alt="Logo" width={50} height={50} />
      </div>
      <h1 className="text-2xl font-semibold mb-2">Create your Account!</h1>
      <small className="text-gray-500 text-sm">Sign in to your account</small>
      <form
        className="mt-5 flex flex-col gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(onSubmit)();
        }}
      >
        <div className="grid grid-cols-2 gap-6">
          <Input
            placeholder="First Name"
            name="firstName"
            register={register}
            rules={{
              required: {
                value: true,
                message: "This field is required",
              },
            }}
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
          />
          <Input
            placeholder="Last Name"
            name="lastName"
            register={register}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
          />
        </div>
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
        <Input
          placeholder="Confirm Password"
          type={showConfirmPassword ? "text" : "password"}
          adornment={{
            start: {
              icon: <MdLock size={20} />,
            },
            end: {
              icon: (
                <IconButton
                  onClick={(e) => setShowConfirmPassword(!showConfirmPassword)}
                  icon={
                    showConfirmPassword ? (
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
          name="confirmPassword"
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
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
