import { create } from 'zustand';
import type { CartItem, CartState, Product } from '../types/index.ts';

type CartActions = {
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
};

type CartStore = CartState & CartActions;

function calculateSummary(items: CartItem[]) {
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return { itemCount, totalCost };
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  itemCount: 0,
  totalCost: 0,
  addItem: (product) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id);

      const items = existingItem
        ? state.items.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
          )
        : [
            ...state.items,
            {
              id: product.id,
              title: product.title,
              price: product.discountedPrice,
              image: product.image,
              quantity: 1,
            },
          ];

      return {
        items,
        ...calculateSummary(items),
      };
    }),
  removeItem: (productId) =>
    set((state) => {
      const items = state.items.filter((item) => item.id !== productId);
      return {
        items,
        ...calculateSummary(items),
      };
    }),
  clearCart: () =>
    set({
      items: [],
      itemCount: 0,
      totalCost: 0,
    }),
}));
