import { UserType } from "@/types/user";
import { createContext } from "react";

const AuthContext = createContext<{
  user: UserType | null;
  login: (data: { identifier: string; password: string }) => void;
  logout: () => void;
}>({
  user: null,
  login: (data) => {},
  logout: () => {},
});

export default AuthContext;
