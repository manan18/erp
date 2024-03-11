import { UserType } from "@/types/user";
import axios from "axios";

export type UserLoginType = {
  email: string;
  password: string;
};

export async function login(user: UserLoginType) {
  await axios.post("http://localhost:4000/api/auth/login", user, {
    withCredentials: true,
  });
  return null;
}

export async function validate(): Promise<UserType> {
  const authData = await axios.post(
    "http://localhost:4000/api/auth/validate",
    null,
    {
      withCredentials: true,
    }
  );
  return authData.data;
}

export async function logout() {
  await axios.post("http://localhost:4000/api/auth/logout", undefined, {
    withCredentials: true,
  });
  return null;
}
