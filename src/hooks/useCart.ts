import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CartItem, DishProp } from "@/types/type";


interface CartProp <restaurantID, CartItem>{
  restaurantID: string;
  cartItems: CartItem[];
}

type CartState = {
  cart: <CartProp<string, CartItem>>[];
  addItem: (dish: DishProp) => void;
  removeItem: (dishId: string) => void;
  clearCart: () => void;
}



export const useCart = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      addItem: (dish: DishProp) =>
        set((state) => {
          const existingIndex = state.cart.findIndex(
            (item) => item.dish.id === dish.id,
          );

          if (existingIndex >= 0) {
            const updatedCart = [...state.cart];
            updatedCart[existingIndex] = {
              ...updatedCart[existingIndex],
              quantity: updatedCart[existingIndex].quantity + 1,
            };
            return { cart: updatedCart };
          }

          return { cart: [...state.cart, { dish, quantity: 1 }] };
        }),
      removeItem: (dishId: string) =>
        set((state) => {
          const existingItem = state.cart.find((item) => item.dish.id === dishId);

          if (!existingItem) {
            return { cart: state.cart };
          }

          if (existingItem.quantity > 1) {
            return {
              cart: state.cart.map((item) =>
                item.dish.id === dishId
                  ? { ...item, quantity: item.quantity - 1 }
                  : item,
              ),
            };
          }

          return {
            cart: state.cart.filter((item) => item.dish.id !== dishId),
          };
        }),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cartStore",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
