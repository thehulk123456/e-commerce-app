import { getConnection } from "@/_utils/db";
import ProductSlider from "../../../_components/ProductsSlider";
import SectionHeader from "../../../_components/SectionHeader";

async function getProductsOnSale() {
  try {
    const connection = await getConnection();

    const [rows] = (await connection.execute(
      `SELECT p.*,s.totalUnitsSold FROM products p 
      JOIN (SELECT productId, SUM(quantity) AS totalUnitsSold FROM orderProduct GROUP BY productId) 
      s ON s.productId = p.productId ORDER BY s.totalUnitsSold DESC LIMIT 10`
    )) as any[];

    return rows;
  } catch (e) {
    return [];
  }
}

export default async function BestSellingProductsSection() {
  const bestSellingProducts = await getProductsOnSale();

  return (
    <section className="flex flex-col items-center lg:items-start">
      <SectionHeader
        title="Best Selling Products"
        sectionTitle="This month"
        className="mb-10"
      />

      <ProductSlider className="mb-[60px]" products={bestSellingProducts} />
    </section>
  );
}
