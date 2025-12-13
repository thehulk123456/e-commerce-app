import { getConnection } from "@/_utils/db";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const query = searchParams.get("search");

  const connection = await getConnection();

  const like = `%${query}%`;

  const [rows] = (await connection.execute(
    `SELECT * FROM products WHERE name LIKE ? ORDER BY name ASC LIMIT 20;`,
    [like]
  )) as any[];

  return Response.json(rows);
}
