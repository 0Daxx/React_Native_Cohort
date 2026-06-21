import { FlatList, Pressable, Text, View } from "react-native";
import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { CartContext, CartItem } from "../../context/CartProvider";

import { SafeAreaView } from "react-native-safe-area-context";

import CheckoutScreen from "../CheckoutScreen";

function OrderDish({
  dish,
  onIncrease,
  onDecrease,
}: {
  dish: CartItem;
  onIncrease: (dish_id: string) => void;
  onDecrease: (dish_id: string) => void;
}) {
  return (
    <View
      style={{
        width: "90%",
        backgroundColor: "#f9f9f9",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View>
        <Text style={{ fontSize: 16, fontWeight: "600" }}>{dish.name}</Text>
        <Text style={{ fontSize: 14, color: "#777" }}>
          ${dish.price.toFixed(2)}
        </Text>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Pressable
          onPress={() => onDecrease(dish.dish_id)}
          style={{ backgroundColor: "#b3ff00", padding: 6, borderRadius: 5 }}
        >
          <Ionicons name="remove-outline" size={20} color="#333" />
        </Pressable>

        <Text style={{ fontSize: 16, fontWeight: "600" }}>{dish.quantity}</Text>

        <Pressable
          onPress={() => onIncrease(dish.dish_id)}
          style={{ backgroundColor: "#0f8002", padding: 6, borderRadius: 5 }}
        >
          <Ionicons name="add-outline" size={20} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
}

export default function OrderScreen() {
  const navigation = useNavigation();

  const {
    cart,
    // addToCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons name="cart-outline" size={80} color="#999" />

        <Text
          style={{
            fontSize: 22,
            fontWeight: "700",
            marginTop: 16,
          }}
        >
          Your cart is empty
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: 20,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          Order
        </Text>

        <Pressable onPress={clearCart}>
          <Ionicons name="trash-outline" size={24} color="#ff4444" />
        </Pressable>
      </View>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.dish_id}
        renderItem={({ item }: { item: CartItem }) => (
          <OrderDish
            dish={item}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
          />
        )}
        contentContainerStyle={{
          alignItems: "center",
          gap: 10,
          paddingBottom: 30,
        }}
        showsVerticalScrollIndicator={false}
      />

      {/* Total */}
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: 20,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          Total
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          $
          {cart
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2)}
          {/* ${ cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2) }*/}
        </Text>
      </View>
      <Pressable
          // onPress={() => navigation.navigate(<CheckoutScreen />)}
          onPress={() => navigation.navigate('Checkout' , { cart } )}
          // onPress={() => navigation.navigate('Checkout' , { cart }  , { screen: 'Checkout' })}
          // onPress={() => navigation.navigate('Checkout' , { cart }  , { screen: 'Checkout' })}
        style={{
          backgroundColor: "#0f8002",
          padding: 15,
          borderRadius: 10,
          width: "90%",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: "#fff",
            textAlign: "center",
          }}
        >
          Checkout
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}
