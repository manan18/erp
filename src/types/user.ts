export type AuthDataType = {
  user: UserType | null;
  role: Role;
};

export type UserType = {
  name: string;
  email: string;
  id: string;
};

export enum Role {
  GUEST = "guest",
  USER = "user",
}
