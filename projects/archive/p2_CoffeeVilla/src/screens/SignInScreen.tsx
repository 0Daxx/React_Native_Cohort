import React, { useContext } from "react";
import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { CartContext } from "../context/CartProvider";

export default function SignInScreen() {
  const { cart } = useContext(CartContext);
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Sign In</Text>
      <Text style={{ fontSize: 16, color: "#777", marginTop: 10 }}>
        This is where the sign-in form will be.
      </Text>
     <View style={{ marginTop: 20 }}>
        <Pressable
          style={{
            backgroundColor: "#333",
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 8,
          }}
          onPress={() => alert("Sign In functionality not implemented yet")}
        >
          <Text style={{ color: "#fff", fontSize: 16 }}>Sign In</Text>          
        </Pressable>
      </View>
    </View>
  );
}