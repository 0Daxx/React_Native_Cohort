import React, { useContext } from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { CartContext, CartItem } from "../context/CartProvider";



export default function CheckoutScreen() {
  const navigation = useNavigation();
  const { cart } = useContext(CartContext);

  return (
    <SafeAreaView>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Checkout</Text>
        <Text style={{ fontSize: 16, color: "#777", marginTop: 10 }}>
          This is where the checkout process will happen.
        </Text>
      </View>

      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>
          Total Items: {cart.reduce((total, item) => total + item.quantity, 0)}
        </Text>
        <Text style={{ fontSize: 18, fontWeight: "600", marginTop: 10 }}>
          Total Price: $
          {cart
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2)}
        </Text>
      </View>

      
      <Pressable style={{ padding: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "600", color: "#0f8002" }}>
          Pay Now 
        </Text>
      </Pressable> 
    </SafeAreaView>
  );
}