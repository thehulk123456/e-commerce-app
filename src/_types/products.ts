export interface Product {
  productId: number;
  name: string;
  description: string;
  priceRegular: number;
  price_sale: number | null;
  onSale: boolean;
  categoryId: number;
  created_at: Date;
  updated_at: Date;
}
