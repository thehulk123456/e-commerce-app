import Footer from "@/_components/Footer";
import Header from "@/_components/Header";
import { CartProvider } from "@/_providers/CartProvider";
import { FavoriteProductsProvider } from "@/_providers/FavoriteProductsProvider";

export default function FeaturesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="h-full"
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
      }}>
      <FavoriteProductsProvider>
        <CartProvider>
          <Header />
          <div className="w-full max-w-[1200px] mx-auto">{children}</div>
          <Footer />
        </CartProvider>
      </FavoriteProductsProvider>
    </div>
  );
}
