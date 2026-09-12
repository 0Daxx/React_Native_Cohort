
import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function CheckoutScreen() {  
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Checkout</Text>
      <Text style={{ fontSize: 16, color: "#777", marginTop: 10 }}>
        This is where the checkout process will happen.
      </Text>
    </View>
  );
}