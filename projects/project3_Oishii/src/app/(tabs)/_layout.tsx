import { Tabs } from "expo-router";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { useCart } from "@/hooks/useCart";
import { useEffect } from "react";
export default function MainTabLayout() {
  const { cart } = useCart();
  console.log("cart.length", cart.length);
  useEffect(() => {
    console.log("cart.length", cart.length);
  }, [cart]);
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={30} color={color} />
          ),
          tabBarLabel: "Search",
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={30} color={color} />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart" size={30} color={color} />
          ),
          tabBarLabel: "Orders",
          // tabBarBadge: 5,
          tabBarBadge: cart.length > 0 ? cart.length : undefined,
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle" size={30} color={color} />
          ),
          tabBarLabel: "Profile",
        }}
      />
    </Tabs>
  );
}
