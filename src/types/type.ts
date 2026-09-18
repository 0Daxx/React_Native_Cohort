export interface DishProp {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    discount?: string;
    isVegetarian?: boolean;
    // quantity?: number;
  }
export interface CartItem {
    dish: DishProp;
    quantity: number;
  }


export interface RestaurantProps {
  id: string;
  name: string;
  offer: string;
  rating: string;
  isAd?: boolean;
  img: string;
  discount?: string;
  deliveryTime?: string;
  deliveryFee?: string;
}