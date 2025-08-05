import { Product } from "@entities/product/@x/cart";
import { ProductOrder } from "@entities/order/@x/cart";
import { create } from "zustand";

interface CartItem {
  product: Product;
  orders: ProductOrder[];
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (item: CartItem) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (targetItem) =>
    set((state) => ({
      items: state.items.filter((i) => i.product.id !== targetItem.product.id),
    })),
}));
