import { UserJWTTokenPayload } from "@/_types/jwt";
import { getConnection } from "@/_utils/db";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;

  if (token) {
    const { userId } = jwt.decode(token) as UserJWTTokenPayload;

    const connection = await getConnection();

    const [rows] = (await connection.execute(
      "   SELECT cartId FROM carts WHERE userId = ?",
      [userId]
    )) as any[];

    const cartId = rows[0].cartId;

    const [productRows] = await connection.execute(
      `
         SELECT * FROM cartItems
        INNER JOIN products on products.productId = cartItems.productId
        WHERE cartId = ?
          `,
      [cartId]
    );

    return Response.json(productRows);
  }

  return Response.json([]);
}
