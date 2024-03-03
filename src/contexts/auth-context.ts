import { UserType } from "@/types/user";
import { createContext } from "react";

const AuthContext = createContext<{
  user: UserType | null;
  login: (data: { identifier: string; password: string }) => Promise<void>;
  logout: () => void;
}>({
  user: null,
  login: (data) => new Promise(() => {}),
  logout: () => {},
});

export default AuthContext;
