
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