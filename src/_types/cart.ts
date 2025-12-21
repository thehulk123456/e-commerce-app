import { Product } from "./products";

export interface CartItem extends Product {
  cartItemId: number;
  cartId: number;
  quantity: number;
}
