import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

import { CartItem } from "../types/ecommerce";

// TODO: Keep this key stable so cart remains persisted across app restarts.
const CART_STORAGE_KEY = "mini-ecommerce-cart";

// TODO: Move shipping and pricing calculation selectors here after product data is ready.
export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);

  return {
    items,
    setItems,
    CART_STORAGE_KEY,
    AsyncStorage
  };
}
