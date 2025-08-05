import { Product } from "@entities/product/@x/cart";
import { create } from "zustand";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartStore {
  cartItems: CartItem[];
  addCartItem: (item: CartItem) => void;
  removeCartItem: (item: CartItem) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  addCartItem: (item) =>
    set((state) => ({ cartItems: [...state.cartItems, item] })),
  removeCartItem: (item) =>
    set((state) => ({
      cartItems: state.cartItems.filter((i) => i.id !== item.id),
    })),
}));
