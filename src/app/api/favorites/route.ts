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
      "   SELECT * FROM userFavorites WHERE userId = ?",
      [userId]
    )) as any[];

    return Response.json(rows);
  }

  return Response.json([]);
}
