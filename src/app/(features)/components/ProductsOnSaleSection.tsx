import { getConnection } from "@/_utils/db";
import ProductSlider from "../../../_components/ProductsSlider";
import SectionHeader from "../../../_components/SectionHeader";

async function getProductsOnSale() {
  try {
    const connection = await getConnection();

    const [rows] = (await connection.execute(
      "SELECT * FROM products WHERE onSale = true LIMIT 20"
    )) as any[];

    return rows;
  } catch (e) {
    return [];
  }
}

export default async function ProductsOnSaleSection() {
  const productsOnSale = await getProductsOnSale();

  return (
    <section>
      <SectionHeader
        title="Flash sales"
        sectionTitle="Today's"
        className="mb-10"
        saleEndDate={new Date("2025-12-12")}
      />

      <ProductSlider className="mb-[60px]" products={productsOnSale} />
    </section>
  );
}
