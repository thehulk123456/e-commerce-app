"use server";

import bcrypt from "bcrypt";

import { getConnection } from "@/_utils/db";
import { passwordRegex } from "@/_utils/regex";
import { redirect } from "next/navigation";

export interface SignUpErrors {
  username?: string;
  email?: string;
  password?: string;
  serverError?: string;
}

export async function registerUser(prevState: any, formData: FormData) {
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  const errors: SignUpErrors = {};

  if (!username) {
    errors.username = "User name must not be empty!";
  }

  if (!email) {
    errors.email = "Email must not be empty!";
  }

  if (!password) {
    errors.password = "Password must not be empty!";
  }

  if (password && !passwordRegex.test(password as string)) {
    errors.password =
      "Password must contain minimum 8 characters, one letter and one number!";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password as string, salt);

  try {
    const connection = await getConnection();

    const [rows] = (await connection.execute(
      "SELECT username, email FROM users WHERE username = ? OR email = ?",
      [username, email]
    )) as any[];

    for (const row of rows) {
      if (row.username === username) {
        errors.username = "Username not available!";
      }
      if (row.email === email) {
        errors.email = "User with that email already exists!";
      }
    }

    if (Object.keys(errors).length > 0) {
      return errors;
    }

    await connection.execute(
      "INSERT INTO users (username, email, passwordHash) VALUES (?, ?, ?)",
      [username, email, passwordHash]
    );
  } catch (e) {
    errors.serverError = "Unexpected error happened!";
    return errors;
  }

  redirect("/login");
}
