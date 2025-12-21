"use server";

import { UserJWTTokenPayload } from "@/_types/jwt";
import { getConnection } from "@/_utils/db";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function addProductToCart(productId: number, delta: number) {
  if (!Number.isInteger(delta) || delta === 0) return null;

  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;
  if (!token) return null;

  const payload = jwt.decode(token) as UserJWTTokenPayload | null;
  if (!payload?.userId) return null;

  const { userId } = payload;

  const connection = await getConnection();

  await connection.execute("INSERT IGNORE INTO carts (userId) VALUES (?)", [
    userId,
  ]);

  const [cartRows] = (await connection.execute(
    "SELECT cartId FROM carts WHERE userId = ?",
    [userId]
  )) as any;

  const cartId = cartRows?.[0]?.cartId;
  if (!cartId) return null;

  await connection.execute(
    `
    INSERT INTO cartItems (cartId, productId, quantity)
    VALUES (?, ?, ?)
    ON DUPLICATE KEY UPDATE
      quantity = GREATEST(quantity + VALUES(quantity), 0)
    `,
    [cartId, productId, delta]
  );

  await connection.execute(
    `DELETE FROM cartItems WHERE cartId = ? AND productId = ? AND quantity < 1`,
    [cartId, productId]
  );

  const [itemRows] = (await connection.execute(
    `SELECT quantity FROM cartItems WHERE cartId = ? AND productId = ?`,
    [cartId, productId]
  )) as any;

  return itemRows?.[0]?.quantity ?? 0;
}
