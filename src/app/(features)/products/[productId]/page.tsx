import { Product } from "@/_types/products";
import { getConnection } from "@/_utils/db";
import { notFound } from "next/navigation";
import ProductDetails from "./ProductDetails";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;

  const connection = await getConnection();

  const [rows] = (await connection.execute(
    `SELECT * FROM products WHERE productId = ? LIMIT 1;`,
    [productId]
  )) as any[];

  if (rows.length === 0) {
    notFound();
  }

  const product = rows[0] as Product;

  return (
    <div className="py-20">
      <ProductDetails product={product} />
    </div>
  );
}
