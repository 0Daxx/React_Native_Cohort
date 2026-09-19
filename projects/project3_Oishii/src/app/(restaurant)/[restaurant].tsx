import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import React, { useState, useMemo } from "react";
import { useLocalSearchParams, usePathname } from "expo-router";
import Ionicons from "@react-native-vector-icons/ionicons";

import {DishProp, CartItem} from "@/types/type";
import { useCart } from "@/hooks/useCart";
import { restaurantData } from "@/data/data";

const restaurant = () => {
  const { cart, addItem , removeItem } = useCart();
  const pathname = usePathname();
  const restaurantId = pathname.split("restaurantId=")[1];

  const restaurant = restaurantData.find((r) => r.id === restaurantId);

  const dishes = restaurant?.dishes || [];

  // fetch restaurant data based on restaurantId . RESTAURANTS has many dishes

  const handleAddToCart = (id: string) => {
    const dish = dishes.find((d) => d.id === id);
    if (dish) {
      addItem(dish);
    }
  };
  
  const handleRemoveFromCart = (id: string) => {
    removeItem(id);
  };

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
                handleAddToCart(dish.id);
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
  const dishListRef = React.useRef<FlatList<DishProp>>(null);

  const cartMap = useMemo(() => {
    const map = new Map<string, number>();
    cart.forEach((item) => map.set(item.dish.id, item.quantity));
    return map;
  }, [cart]);

  const getQuantity = (dishId: string) => cartMap.get(dishId) || 0;

  return (
    <View>
      <Image
        source={{ uri: "@/assets/images/onboard1.png" }}
        style={{ width: "100%", backgroundColor: "rgb(0, 26, 155)" }}
      />

      {/* restaurant details */}
      <View>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          {restaurant?.name }
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="pin-outline" size={30} />
          <Text>{restaurant?.location}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="time-outline" size={30} />
          <Text>{restaurant?.deliveryTime}</Text>
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
    </View>
  );
};

export default restaurant;

const styles = StyleSheet.create({});
