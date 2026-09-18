import { DishProp, RestaurantProps } from "@/types/type";

// export const RestaurantDetails: RestaurantProps =
export const dishes: DishProp[] = [
  {
    id: "1",
    name: "Spaghetti Bolognese",
    description: "Classic Italian pasta dish with rich meat sauce.",
    price: 12.99,
    image: "spaghetti.jpg",
    discount: "20% OFF",
    isVegetarian: true,
    // quantity: 2,
  },
  {
    id: "2",
    name: "Margherita Pizza",
    description:
      "Traditional pizza with fresh tomatoes, mozzarella, and basil.",
    price: 10.99,
    image: "margherita.jpg",
    discount: "10% OFF",
    isVegetarian: false,
    // quantity: 2,
  },
  {
    id: "3",
    name: "Caesar Salad",
    description: "Crisp romaine lettuce with Caesar dressing and croutons.",
    price: 8.99,
    image: "caesar.jpg",
    // quantity: 0,
  },
];
