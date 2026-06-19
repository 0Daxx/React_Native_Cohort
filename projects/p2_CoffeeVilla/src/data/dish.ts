export interface DishProps {
  image: string;
  name: string;
  price: number;
  restaurantName: string;
  veg: boolean;
  rating: number;
  distance: number;
  id: string;
  health: "High" | "Medium" | "Low";
  calories: number;
  protein: number;
  // qty: number;
}

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

// random id generator
const randomId = () => {
  return uuidv4();
};

// image: "https://source.unsplash.com/400x300/?food",
export const Dishes: DishProps[] = [
  {
    image: "https://picsum.photos/200/300",
    name: "Dish 1",
    price: 10,
    restaurantName: "Restaurant 1",
    veg: true,
    rating: 4.5,
    distance: 2,
    id: randomId(),
    health: "High",
    calories: 500,
    protein: 20,
  },
  {
    image: "https://picsum.photos/200/300",
    name: "Dish 1",
    price: 10,
    restaurantName: "Restaurant 1",
    veg: true,
    rating: 4.5,
    distance: 2,
    id: randomId(),
    health: "High",
    calories: 500,
    protein: 20,
  },
  {
    image: "https://picsum.photos/200/300",
    name: "Dish 1",
    price: 10,
    restaurantName: "Restaurant 1",
    veg: true,
    rating: 4.5,
    distance: 2,
    id: randomId(),
    health: "High",
    calories: 500,
    protein: 20,
  },
  {
    image: "https://picsum.photos/200/300",
    name: "Dish 1",
    price: 10,
    restaurantName: "Restaurant 1",
    veg: true,
    rating: 4.5,
    distance: 2,
    id: randomId(),
    health: "High",
    calories: 500,
    protein: 20,
  },
  {
    image: "https://picsum.photos/200/300",
    name: "Dish 1",
    price: 10,
    restaurantName: "Restaurant 1",
    veg: true,
    rating: 4.5,
    distance: 2,
    id: randomId(),
    health: "High",
    calories: 500,
    protein: 20,
  },
  {
    image: "https://picsum.photos/200/300",
    name: "Dish 1",
    price: 10,
    restaurantName: "Restaurant 1",
    veg: true,
    rating: 4.5,
    distance: 2,
    id: randomId(),
    health: "High",
    calories: 500,
    protein: 20,
  },
  {
    image: "https://picsum.photos/200/300",
    name: "Dish 1",
    price: 10,
    restaurantName: "Restaurant 1",
    veg: true,
    rating: 4.5,
    distance: 2,
    id: randomId(),
    health: "High",
    calories: 500,
    protein: 20,
  },
  {
    image: "https://picsum.photos/200/300",
    name: "Dish 1",
    price: 10,
    restaurantName: "Restaurant 1",
    veg: true,
    rating: 4.5,
    distance: 2,
    id: randomId(),
    health: "High",
    calories: 500,
    protein: 20,
  },
  {
    image: "https://picsum.photos/200/300",
    name: "Dish 1",
    price: 10,
    restaurantName: "Restaurant 1",
    veg: true,
    rating: 4.5,
    distance: 2,
    id: randomId(),
    health: "High",
    calories: 500,
    protein: 20,
  },
  {
    image: "https://picsum.photos/200/300",
    name: "Dish 1",
    price: 10,
    restaurantName: "Restaurant 1",
    veg: true,
    rating: 4.5,
    distance: 2,
    id: randomId(),
    health: "High",
    calories: 500,
    protein: 20,
  },
];