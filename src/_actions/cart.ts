"use server";

import { UserJWTTokenPayload } from "@/_types/jwt";
import { getConnection } from "@/_utils/db";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function addProductToCart(productId: number, delta: number) {
  if (!Number.isInteger(delta) || delta === 0) return;

  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;

  if (token) {
    const { userId } = jwt.decode(token) as UserJWTTokenPayload;

    const connection = await getConnection();

    await connection.execute("INSERT IGNORE INTO carts (userId) VALUES (?)", [
      userId,
    ]);

    const [rows] = (await connection.execute(
      "   SELECT cartId FROM carts WHERE userId = ?",
      [userId]
    )) as any[];

    const cartId = rows[0].cartId;

    await connection.execute(
      `
            INSERT INTO cartItems (cartId,productId,quantity)
            VALUES (?,?,GREATEST(?,0))
            ON DUPLICATE KEY UPDATE quantity = quantity + VALUES(quantity)
        `,
      [cartId, productId, delta]
    );

    await connection.execute(
      `DELETE FROM cartItems WHERE cartId = ? AND productId = ? AND quantity <= 0`,
      [cartId, productId]
    );
  }
}
