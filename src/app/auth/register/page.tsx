import React from "react";
import RegisterForm from "@/components/auth/molecules/RegisterForm";
import { Metadata } from "next";
import logo from "@/assets/images/logo.png";

export const metadata: Metadata = {
  title: "Register",
  description: "Register for an account",
  icons: {
    icon: logo.src,
  },
};

const RegisterPage = () => {
  return <RegisterForm />;
};

export default RegisterPage;
