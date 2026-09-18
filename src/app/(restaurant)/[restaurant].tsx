import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import React, { useState, useMemo } from "react";
import { useLocalSearchParams } from "expo-router";
import Ionicons from "@react-native-vector-icons/ionicons";

const restaurant = () => {
  const { restaurantId } = useLocalSearchParams();

  // fetch restaurant data based on restaurantId . RESTAURANTS has many dishes

  interface DishProp {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    discount?: string;
    isVegetarian?: boolean;
    // quantity?: number;
  }
  interface CartItem {
    dish: DishProp;
    quantity: number;
  }

  const RenderDishItem = (dish: DishProp) => {
    const dishInCart = cart.find((item) => item.dish.id === dish.id);
    return (
      <View
        style={{
          padding: 10,
          borderWidth: 1,
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text>{dish.name}</Text>
          <Text>{dish.description}</Text>
          <Text>${dish.price.toFixed(2)}</Text>
          {dish.discount && <Text>Discount: {dish.discount}</Text>}
          {dish.isVegetarian !== undefined && (
            <Text>{dish.isVegetarian ? "Vegetarian" : "Non-Vegetarian"}</Text>
          )}
        </View>

        <View>
          <Image
            source={{ uri: dish.image }}
            style={{
              width: 100,
              height: 100,
              resizeMode: "cover",
              borderRadius: 10,
              backgroundColor: "rgb(0, 26, 155)",
            }}
          />
          <View
            style={{
              position: "absolute",
              bottom: 10,
              // right: 10,
              display: "flex",
              width: "90%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "white",
            }}
          >
            {dishInCart ? (
              <Pressable
                onPress={() => handleRemoveFromCart(dish.id)}
                hitSlop={30}
              >
                <Ionicons name="remove" size={20} color="rgb(26, 188, 115)" />
              </Pressable>
            ) : (
              <Pressable hitSlop={30}>
                <Text>Add </Text>
              </Pressable>
            )}

            <Text style={{ fontWeight: "bold", color: "rgb(0, 111, 61)" }}>
              {dishInCart?.quantity}
            </Text>
            <Pressable
              onPress={() => {
                handleAddToCart(dish);
              }}
              hitSlop={30}
            >
              <Ionicons name="add" size={20} color="rgb(26, 188, 115)" />
            </Pressable>
          </View>
        </View>
      </View>
    );
  };
  const dishes: DishProp[] = [
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
  const dishListRef = React.useRef<FlatList<DishProp>>(null);

  const handleRemoveFromCart = (dishId: string) => {
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

  const [cart, setCart] = useState<CartItem[]>([]);

  // OPTIMIZATION: Create a Map for instant lookups instead of .find()
  // This prevents UI lag when you have many dishes
  const cartMap = useMemo(() => {
    const map = new Map<string, number>();
    cart.forEach((item) => map.set(item.dish.id, item.quantity));
    return map;
  }, [cart]);

  const handleAddToCart = (dish: DishProp) => {
    setCart((prevCart) => {
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
  // Helper to get quantity safely in render
  const getQuantity = (dishId: string) => cartMap.get(dishId) || 0;

  return (
    <View>
      <Image
        source={{ uri: "@/assets/images/onboard1.png" }}
        style={{ width: "100%", backgroundColor: "rgb(0, 26, 155)" }}
      />

      {/* restaurant details */}
      <View>
        <Text>Restaurant Name</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="pin-outline" size={30} />
          <Text>Location</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="time-outline" size={30} />
          <Text>45-50 min</Text>
        </View>
      </View>

      {/* filters and tags */}

      {/* dishes */}
      <FlatList
        data={dishes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RenderDishItem key={item.id} {...item} />}
        ref={dishListRef}
      />

      <Text>{restaurantId}</Text>
    </View>
  );
};

export default restaurant;

const styles = StyleSheet.create({});
