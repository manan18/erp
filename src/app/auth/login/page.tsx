import React from "react";
import logo from "@/assets/images/logo.png";
import { Metadata } from "next";

//components import
import LoginForm from "@/components/auth/molecules/LoginForm";

export const metadata: Metadata = {
  title: "Login",
  description: "Login",
  icons: {
    icon: logo.src,
  },
};

const LoginPage = () => {
  return <LoginForm />;
};

export default LoginPage;
