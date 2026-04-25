// TODO: Keep category simple and aligned with product filters on Home screen.
export type Category = "all" | "shoes" | "clothing" | "accessories";

// TODO: Add only fields needed by UI cards and details screen.
export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: Exclude<Category, "all">;
  rating: number;
  description: string;
  inStock: boolean;
};

// TODO: Cart item should stay flat for AsyncStorage persistence.
export type CartItem = {
  productId: string;
  quantity: number;
};

// TODO: Expand order status only when checkout flow needs it.
export type OrderStatus = "placed" | "processing" | "delivered";

// TODO: Use this type in checkout result and profile order history.
export type Order = {
  id: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  status: OrderStatus;
  createdAt: string;
};
