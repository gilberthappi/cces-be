import type { $Enums } from "@prisma/client";
import { TsoaResponse } from "tsoa";
export interface IResponse<T> {
  statusCode: number;
  message: string;
  error?: unknown;
  data?: T;
}

export type TUser = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  photo?: Express.Multer.File | string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  roles?: { id: string; role: string; userId: string }[];
  company?: { id: string; role: string; userId: string; companyId: string };
};

export type RoleT = "ADMIN" | "ORGANIZATION" | "CITIZEN";

export interface IUser extends Omit<TUser, "id" | "createdAt" | "updatedAt"> {}
export interface ILoginResponse
  extends Omit<TUser, "password" | "createdAt" | "updatedAt" | "roles"> {
  token: string;
  roles: $Enums.Role[];
}
export interface ILoginUser extends Pick<IUser, "email" | "password"> {}
export interface ISignUpUser
  extends Pick<
    IUser,
    "email" | "password" | "firstName" | "lastName" | "photo"
  > {
  role: RoleT;
}

export interface CreateUser {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  photo?: Express.Multer.File | string | null;
  role: RoleT;
}

export type TErrorResponse = TsoaResponse<
  400 | 401 | 500,
  IResponse<{ message: string }>
>;

export interface IResponse<T> {
  statusCode: number;
  message: string;
  data?: T;
}
