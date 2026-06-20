import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

import { DishProps } from "../data/mockData";

export interface CartItem extends DishProps {
  quantity: number;
}

interface CartState {
  cart: CartItem[];

  addToCart: (dish: DishProps) => void;

  removeFromCart: (dish_id: string) => void;
  clearCart: () => void;

  increaseQuantity: (dish_id: string) => void;
  decreaseQuantity: (dish_id: string) => void;
}

export const CartContext = createContext<CartState>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
});

interface CartProviderProps {
  children: ReactNode;
}


export default function CartProvider({
  children,
}: CartProviderProps) {
  const [cart, setCartItems] = useState<CartItem[]>([]);

  function addToCart(dish: DishProps){
  setCartItems((prevItems) => {
    const existingItem = prevItems.find(
      (item) => item.dish_id === dish.dish_id
    );

    if (existingItem) {
      return prevItems.map((item) =>
        item.dish_id === dish.dish_id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [...prevItems, { ...dish, quantity: 1 }];
  });
};

  const removeFromCart = (itemId: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.dish_id !== itemId)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const increaseQuantity = (itemId: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.dish_id === itemId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (itemId: string) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.dish_id === itemId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);