import { UserType } from "@/types/user";
import { createContext } from "react";

type AuthContextType = {
  user: UserType | null;
  setUser: (user: UserType | null) => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
});

export default AuthContext;
