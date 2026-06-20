
interface RestaurantProps {
  image: string;
  name: string;
  mood: string;
  location: string;
  rating: number;
  id: number;
}

// import { getRandomValues } from "expo-crypto";
// import { v4 as uuidv4 } from "uuid";
// import { Background } from "@react-navigation/elements";


const randomId = () => {
  return Math.floor(Math.random() * 1000000);
  // const random = new Uint8Array(16);
  // getRandomValues(random);

  // return uuidv4({
  //   random,
  // });

   /*  DATA 

   Restaurant : details about restaurant (name, image, veg/non-veg, rating, mood, location)
    Each Restaurant has Dishes : details about dishes (name, image, veg/non-veg, rating, price, restaurantId , size : small, medium , large , qty , cuisine: north indian, south indian, chinese, italian, mexican , etc , health: high, medium, low, calories, protein, etc , nutrition : {calories, protein, carbs, fats} , ingredients: [string] , description: string  , reviews: [{ userId, rating, comment, date }] , availability: boolean , discount: number (0-100) , finalPrice: number (calculated from price and discount) , deliveryTime: number (in minutes) , deliveryFee: number (in rupees) , deliveryAddress: string , deliveryInstructions: string , reviews: [{ userId, rating, comment, date }]  , etc )


    30 Restaurants , each has 10 dishes 

    Dishes Example : paneer butter masala (veg) , chicken curry (non-veg) , veg biryani (veg) , chicken biryani (non-veg) , veg noodles (veg) , chicken noodles (non-veg) , veg thali (veg) , non-veg thali (non-veg) , veg pizza (veg) , chicken pizza (non-veg) , veg burger (veg) , non-veg burger (non-veg) , pizza , butger , noodles, 

  
  */

};

export const RESTAURANTS: RestaurantProps[] = [
  {
    image: "https://source.unsplash.com/400x300/?cafe",
    name: "Cafe 1",
    mood: "Mood 1",
    location: "Location 1",
    rating: 4.5,
    id: randomId(),
  },
  {
    image: "https://source.unsplash.com/400x300/?cafe",
    name: "Cafe 1",
    mood: "Mood 1",
    location: "Location 1",
    rating: 4.5,
    id: randomId(),
  },
  {
    image: "https://source.unsplash.com/400x300/?cafe",
    name: "Cafe 1",
    mood: "Mood 1",
    location: "Location 1",
    rating: 4.5,
    id: randomId(),
  },
  {
    image: "https://source.unsplash.com/400x300/?cafe",
    name: "Cafe 1",
    mood: "Mood 1",
    location: "Location 1",
    rating: 4.5,
    id: randomId(),
  },
  {
    image: "https://source.unsplash.com/400x300/?cafe",
    name: "bole to vadapao",
    mood: "Mood 1",
    location: "Location 1",
    rating: 4.5,
    id: randomId(),
  },
  {
    image: "https://source.unsplash.com/400x300/?cafe",
    name: "Cafe 1",
    mood: "Mood 1",
    location: "Location 1",
    rating: 4.5,
    id: randomId(),
  },
  {
    image: "https://source.unsplash.com/400x300/?cafe",
    name: "aalo chef",
    mood: "Mood 1",
    location: "Location 1",
    rating: 4.5,
    id: randomId(),
  },
  {
    image: "https://source.unsplash.com/400x300/?cafe",
    name: "bhindi rasoi",
    mood: "Mood 1",
    location: "Location 1",
    rating: 4.5,
    id: randomId(),
  },
  {
    image: "https://source.unsplash.com/400x300/?cafe",
    name: "chowmein saga",
    mood: "Mood 1",
    location: "Location 1",
    rating: 4.5,
    id: randomId(),
  },
  {
    image: "https://source.unsplash.com/400x300/?cafe",
    name: "Cafe 1",
    mood: "Mood 1",
    location: "Location 1",
    rating: 4.5,
    id: randomId(),
  },
  {
    image: "https://source.unsplash.com/400x300/?cafe",
    name: "Apni rasoi",
    mood: "Mood 1",
    location: "Location 1",
    rating: 4.5,
    id: randomId(),
  },
];