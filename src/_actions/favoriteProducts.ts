"use server";

import { UserJWTTokenPayload } from "@/_types/jwt";
import { getConnection } from "@/_utils/db";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function addProductToFavorites(productId: number) {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;

  if (token) {
    const { userId } = jwt.decode(token) as UserJWTTokenPayload;

    const connection = await getConnection();

    await connection.execute(
      "INSERT IGNORE INTO userFavorites (userId,productId) VALUES (?,?)",
      [userId, productId]
    );
  }
}

export async function removeProductFromFavorites(productId: number) {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;

  if (token) {
    const { userId } = jwt.decode(token) as UserJWTTokenPayload;

    const connection = await getConnection();

    await connection.execute(
      "DELETE FROM userFavorites WHERE userId = ? AND productId = ?",
      [userId, productId]
    );
  }
}
