"use server";

import React from "react";
import { onAuthStateChanged } from "firebase/auth";
import { notFound } from "next/navigation";
import { auth } from "@/config/firebase.config";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      notFound();
    }
  });
  return <>{children}</>;
};

export default PrivateLayout;
