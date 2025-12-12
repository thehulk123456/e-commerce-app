"use server";

import { getConnection } from "@/_utils/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export interface LoginErrors {
  username?: string;
  password?: string;
  serverError?: string;
}

export async function loginUser(prevState: any, formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");

  const errors: LoginErrors = {};

  if (!username) {
    errors.username = "User name must not be empty!";
  }

  if (!password) {
    errors.password = "Password must not be empty!";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  try {
    const connection = await getConnection();

    const [rows] = (await connection.execute(
      "SELECT username,userId,email, passwordHash FROM users WHERE username = ?",
      [username]
    )) as any[];

    if (rows.length === 0) {
      errors.serverError = "Invalid username or password!";
      return errors;
    }

    const passwordHash = rows[0].password_hash;

    const userId = rows[0].userId;
    const email = rows[0].email;

    const isPasswordMatch = await bcrypt.compare(
      password as string,
      passwordHash
    );

    if (!isPasswordMatch) {
      errors.serverError = "Invalid username or password!";
      return errors;
    }

    const token = await jwt.sign(
      {
        username,
        userId,
        email,
      },
      process.env.JWT_SECRET as string
    );

    const cookieStore = await cookies();

    cookieStore.set("token", token, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 7 days, in seconds
      path: "/",
    });
  } catch (e) {
    errors.serverError = "Unexpected error happened!";
    return errors;
  }

  redirect("/");
}
