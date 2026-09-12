import {View , Text , Image , Pressable} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";
import { DishProps } from "../data/mockData";
import { useContext } from "react"; 
import {  CartContext  , CartItem  } from "../context/CartProvider";

export default function CartScreen({ }) {
  const {
  cart,
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} = useContext(CartContext);

const { width, height } = useWindowDimensions();

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Your Cart
      </Text>
      {cart.length === 0 ? (
        <Text style={{ fontSize: 18, color: "#777" }}>Your cart is empty.</Text>
      ) : (
        cart.map((item) => (
          <View
            key={item.dish_id}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 15,
              backgroundColor: "#f9f9f9",
              padding: 10,
              borderRadius: 10,
              elevation: 2,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.2,
              shadowRadius: 1.41,
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: 80, height: 80, borderRadius: 10, marginRight: 15 }}
            />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 16, fontWeight: "600" }}>{item.name}</Text>
              <Text style={{ fontSize: 14, color: "#777" }}>
                ${item.price.toFixed(2)}
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Pressable
                onPress={
                  () => decreaseQuantity(item.dish_id)
                }
                style ={{ backgroundColor: "#b3ff00", padding: 6, borderRadius: 5, marginBottom: 4 }}
              >
                <Ionicons name="remove-outline" size={20} color="#333" />
              </Pressable>
              <Text style={{ marginHorizontal: 10, fontSize: 16 }}>{item.quantity}</Text>
              <Pressable
                onPress={
                  () => increaseQuantity(item.dish_id)
                }
                style ={{ backgroundColor: "#b3ff00", padding: 6, borderRadius: 5, marginBottom: 4 }}
              >
                <Ionicons name="add-outline" size={20} color="#333" />
              </Pressable>
            </View>
          </View>
        ))
      )}
    </View>
  );
}