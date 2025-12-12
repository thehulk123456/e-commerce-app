export interface Product {
  productId: number;
  name: string;
  description: string;
  priceRegular: number;
  priceSale: number | null;
  onSale: boolean;
  categoryId: number;
  createdAt: Date;
  updatedAt: Date;
}
