import { create } from "zustand";
import { CartStore, Product } from "@/types";

// Zustand state managment
export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  // Adding item
  addItem: (product: Product) => {
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + (product.quantity || 1) }
              : item
          ),
        };
      }

      return {
        items: [...state.items, { ...product, quantity: product.quantity || 1 }],
      };
    });
  },

  // Remove item
  removeItem: (productId: number) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
    }));
  },

  // updates item
  updateQuantity: (productId: number, quantity: number) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      ),
    }));
  },

  // To clear the cart if all the items are removed or purchased
  clearCart: () => {
    set({ items: [] });
  },

  // Total cart items
  getTotal: () => {
    const state = get();
    return state.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },
}));
