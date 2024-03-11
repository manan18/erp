"use client";

import { UserType } from "@/types/user";
import React, { createContext, useEffect } from "react";
import { UserLoginType, login as l, validate as v } from "@/lib/auth";

export enum Role {
  GUEST = "guest",
  USER = "user",
}

export type AuthDataType = {
  user: UserType | null;
  role: Role;
};

const AuthContext = createContext<{
  authData: AuthDataType;
  error: string | null;
  login: (user: UserLoginType) => void;
  logout: () => void;
  loading: boolean;
}>({
  authData: {
    user: null,
    role: Role.GUEST,
  },
  error: null,
  login: () => {},
  logout: () => {},
  loading: true,
});

export const AuthProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [authData, setAuthData] = React.useState<AuthDataType>({
    role: Role.GUEST,
    user: null,
  });
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  const handleError = (err: unknown) => {
    setAuthData({
      role: Role.GUEST,
      user: null,
    });
    setError(err instanceof Error ? err.message : "Something went wrong");
  };

  const login = async (user: UserLoginType) => {
    try {
      setLoading(true);
      await l(user);
      const userData = await v();
      setAuthData({
        role: Role.USER,
        user: userData,
      });
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  };

  const validate = async () => {
    try {
      setLoading(true);
      const userData = await v();
      setAuthData({
        role: Role.USER,
        user: userData,
      });
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      console.log("logout");
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Init load, validate
    validate();
  }, []);

  useEffect(() => {
    if (authData.user) setError(null);
  }, [authData]);

  return (
    <AuthContext.Provider
      value={{
        authData,
        error,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
