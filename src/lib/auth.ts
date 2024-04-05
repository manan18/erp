import { UserType } from "@/types/user";
import axios from "@/config/axios.config";

export type UserLoginType = {
  username: string;
  email: string;
  password: string;
};

export type UserRegisterType = {
  email: string;
  username: string;
  password: string;
  name: string;
};

export async function login(user: UserLoginType) {
  await axios.post("/auth/login", user, {
    withCredentials: true,
  });
  return null;
}

export async function validate(): Promise<UserType> {
  const authData = await axios.post("/auth/validate", null, {
    withCredentials: true,
  });
  return authData.data;
}

export async function logout() {
  await axios.post("/auth/logout", undefined, {
    withCredentials: true,
  });
  return null;
}

export async function signUp(user: UserRegisterType) {
  await axios.post("/auth/register", user, {
    withCredentials: true,
  });
  return null;
}

export async function usernameExists(username: string) {
  const res = await axios.post("/users/usernameExists", { username });
  return res.data;
}
