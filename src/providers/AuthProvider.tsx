"use client";

import AuthContext from "@/contexts/auth-context";
import { auth } from "@/config/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { getUser } from "@/lib/auth";

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        getUser(user).then((userData) => {
          setUser(userData);
        });
      } else {
        setUser(null);
      }
    });
    console.log("user", user);

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
