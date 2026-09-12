export type DishProps = {
  dish_id: string;
  name: string;
  price: number;
  image?: string;
  rating: number;
  size: "small" | "medium" | "large";
}

export const DISHES: DishProps[] = [
  {
    dish_id: "1",
    name: "Paneer Butter Masala",
    price: 280,
    rating: 4.5,
    size: "medium",
    image: "/images/paneer-butter-masala.jpg",
  },
  {
    dish_id: "2",
    name: "Chicken Curry Supreme",
    price: 340,
    rating: 4.6,
    size: "large",
    image: "/images/chicken-curry.jpg",
  },
  {
    dish_id: "3",
    name: "Premium Veg Biryani",
    price: 240,
    rating: 4.4,
    size: "medium",
    image: "/images/veg-biryani.jpg",
  },
  {
    dish_id: "4",
    name: "Hyderabadi Chicken Biryani",
    price: 320,
    rating: 4.7,
    size: "large",
    image: "/images/chicken-biryani.jpg",
  },
  {
    dish_id: "5",
    name: "Schezwan Veg Noodles",
    price: 190,
    rating: 4.1,
    size: "medium",
    image: "/images/veg-noodles.jpg",
  },
  {
    dish_id: "6",
    name: "Wok Chicken Noodles",
    price: 230,
    rating: 4.3,
    size: "large",
    image: "/images/chicken-noodles.jpg",
  },
  {
    dish_id: "7",
    name: "Deluxe Veg Thali",
    price: 350,
    rating: 4.8,
    size: "large",
    image: "/images/veg-thali.jpg",
  },
  {
    dish_id: "8",
    name: "Royal Non-Veg Thali",
    price: 420,
    rating: 4.7,
    size: "large",
    image: "/images/nonveg-thali.jpg",
  },
  {
    dish_id: "9",
    name: "Garden Fresh Pizza",
    price: 299,
    rating: 4.2,
    size: "medium",
    image: "/images/veg-pizza.jpg",
  },
  {
    dish_id: "10",
    name: "Smoked Chicken Pizza",
    price: 380,
    rating: 4.5,
    size: "large",
    image: "/images/chicken-pizza.jpg",
  },
];

export interface RestaurantProps{
  res_id: string;
  name: string;
  image: string;
  rating: number;
  loc: string;
  address: string;
  dishes: DishProps[];
}


export const RESTAURANTS: RestaurantProps[] = [
  {
    res_id: "res_1",
    name: "The Punjabi Dhaba",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600",
    rating: 4.5,
    loc: "Connaught Place",
    address: "A-12, Connaught Place, New Delhi",
    dishes: [DISHES[0], DISHES[2], DISHES[6]],
  },
  {
    res_id: "res_2",
    name: "Imperial China",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600",
    rating: 4.4,
    loc: "Saket",
    address: "Select Citywalk Mall, Saket, New Delhi",
    dishes: [DISHES[4], DISHES[5]],
  },
  {
    res_id: "res_3",
    name: "Dakshin Flavors",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600",
    rating: 4.6,
    loc: "Karol Bagh",
    address: "12A Ajmal Khan Road, Karol Bagh, New Delhi",
    dishes: [DISHES[2], DISHES[6]],
  },
  {
    res_id: "res_4",
    name: "Pizzeria Roma",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
    rating: 4.3,
    loc: "Vasant Kunj",
    address: "DLF Promenade Mall, Vasant Kunj, New Delhi",
    dishes: [DISHES[8], DISHES[9]],
  },
  {
    res_id: "res_5",
    name: "Amigo Taco Hub",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600",
    rating: 4.2,
    loc: "Rajouri Garden",
    address: "Metro Walk, Rajouri Garden, New Delhi",
    dishes: [DISHES[4], DISHES[10]],
  },
  {
    res_id: "res_6",
    name: "The Burger Bistro",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
    rating: 4.1,
    loc: "Hauz Khas",
    address: "Hauz Khas Village, New Delhi",
    dishes: [DISHES[10], DISHES[11]],
  },
  {
    res_id: "res_7",
    name: "Shree Balaji Pure Veg",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600",
    rating: 4.7,
    loc: "Chandni Chowk",
    address: "Near Fatehpuri Masjid, Chandni Chowk, Delhi",
    dishes: [DISHES[0], DISHES[2], DISHES[6]],
  },
  {
    res_id: "res_8",
    name: "Wok Express",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600",
    rating: 4.0,
    loc: "Noida Sector 62",
    address: "Sector 62 Market, Noida",
    dishes: [DISHES[4], DISHES[5]],
  },
  {
    res_id: "res_9",
    name: "Sagar Ratna Delights",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600",
    rating: 4.5,
    loc: "Gurgaon Phase 3",
    address: "Phase 3 Market, Gurugram",
    dishes: [DISHES[2], DISHES[6]],
  },
  {
    res_id: "res_10",
    name: "Bella Italia",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600",
    rating: 4.4,
    loc: "Greater Kailash",
    address: "M Block Market, GK-II, New Delhi",
    dishes: [DISHES[8], DISHES[9]],
  },
];


export const restaurantsData: RestaurantProps[] = RESTAURANTS.map(
  (res, resIdx) => {
    const resId = `res_${resIdx + 1}`;

    const selectedDishes: DishProps[] = Array.from(
      { length: Math.min(5, DISHES.length) },
      (_, idx) => ({
        ...DISHES[(resIdx + idx) % DISHES.length],
        dish_id: `${resId}_dish_${idx + 1}`,
      })
    );

    return {
      res_id: resId,
      name: res.name,
      image: res.image,
      rating: res.rating,
      loc: res.loc,
      address: res.address,
      dishes: selectedDishes,
    };
  }
);