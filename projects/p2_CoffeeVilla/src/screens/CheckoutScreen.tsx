import React, { useContext } from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { CartContext, CartItem } from "../context/CartProvider";

export default function CheckoutScreen() {
  const navigation = useNavigation();
  const { cart , clearCart } = useContext(CartContext);

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

      <Pressable
        onPress={() => {
          // Handle payment logic here
          alert("Payment Successful!");
          // empty cart 
          // cart.removeAll();
          clearCart();
          navigation.navigate("Home");
        }}

        // TODO : Add the order details to the order history 
        style={{
          backgroundColor: "#0f8002",
          borderRadius: 10,
          margin: 20,
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
        }}
      >
        {/* style={{ padding: 20 }}> */}
        <Text style={{ fontSize: 18, fontWeight: "600", color: "#c6c6c6" }}>
          Pay Now
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}
