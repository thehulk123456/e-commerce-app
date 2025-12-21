import ProductSlider from "@/_components/ProductsSlider";
import { UserJWTTokenPayload } from "@/_types/jwt";
import { getConnection } from "@/_utils/db";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export default async function Favorites() {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;

  if (token) {
    const { userId } = jwt.decode(token) as UserJWTTokenPayload;

    const connection = await getConnection();

    const favoriteProducts = (await connection.execute(
      `SELECT * FROM userFavorites 
        INNER JOIN products on products.productId = userFavorites.productId
        WHERE userId=?`,
      [userId]
    )) as any[];

    if (!favoriteProducts.length) {
      return <div className="py-10">No products in wishlist!</div>;
    }

    return (
      <div>
        <div className="mb-[60px] mt-10 text-xl">Wishlist</div>

        <ProductSlider
          products={JSON.parse(JSON.stringify(favoriteProducts))[0]}
          showViewAllProducts={false}
          className="mb-10"
        />
      </div>
    );
  } else {
    throw new Error("Error fetching wishlist products");
  }
}
