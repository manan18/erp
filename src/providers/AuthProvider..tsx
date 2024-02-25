"use server";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AuthContext from "@/contexts/auth-context";
import { UserType } from "@/types/user";
import instance from "@/config/axios.config";
import { cookies } from "next/headers";

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();
  const [user, setUser] = useState<UserType | null>(null);

  const login = async (data: { identifier: string; password: string }) => {
    try {
      const response = await instance.post("/auth/local", data);
      setUser(response.data.user);
      cookies().set("token", response.data.jwt, {
        secure: true,
        httpOnly: true,
        expires: 7,
      });
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  const logout = () => {
    setUser(null);
    cookies().delete("token");
    router.push("/auth/login");
  };
  useEffect(() => {
    const token = cookies().get("token");
    if (token) {
      instance
        .get("/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          router.push("/auth/login");
          console.log(error);
        });
    }
  }, []);

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
