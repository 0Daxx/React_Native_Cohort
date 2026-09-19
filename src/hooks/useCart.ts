import { useState } from "react"
import { CartItem, DishProp } from "@/types/type";
// import 
export const useCart = () =>{
  const [cart , setCart] = useState<CartItem[]>([]);
  
  const addItem = (dish : DishProp ) => {
    setCart((prevCart) : CartItem[] => {
      const existingIndex = prevCart.findIndex(
        (item) => item.dish.id === dish.id,
      );

      if (existingIndex >= 0) {
        // Item exists: Update quantity immutably
        const newCart = [...prevCart];
        newCart[existingIndex] = {
          ...newCart[existingIndex],
          quantity: newCart[existingIndex].quantity + 1,
        };
        return newCart;
      } else {
        // Item doesn't exist: Add new entry
        return [...prevCart, { dish, quantity: 1 }];
      }
    });
  };
  const removeItem = (dishId: string) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.dish.id === dishId);

      if (!existingItem) return prevCart;

      if (existingItem.quantity > 1) {
        // Decrement quantity
        return prevCart.map((item) =>
          item.dish.id === dishId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );
      } else {
        // Remove item entirely if quantity is 1
        return prevCart.filter((item) => item.dish.id !== dishId);
      }
    });
  };

  return { cart, addItem, removeItem };
}
