import { UserType } from "@/types/user";
import axios from "@/config/axios.config";
import { AxiosError } from "axios";

export type UserLoginType = {
  identifier: string;
  password: string;
};

export type UserRegisterType = {
  email: string;
  username: string;
  password: string;
  name: string;
};

export async function login(user: UserLoginType) {
  try {
    const response = await axios.post("/auth/login", user, {
      withCredentials: true,
    });
    return response.data.user;
  } catch (error) {
    throw error;
  }
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
  try {
    const response = await axios.post("/auth/signup", user);
    return response.data.user;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    } else throw new Error("An error occurred. Please try again.");
  }
  return null;
}

export async function usernameExists(username: string) {
  const res = await axios.post("/users/usernameExists", { username });
  return res.data;
}
