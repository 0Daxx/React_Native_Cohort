import { Tabs } from "expo-router";
import { Ionicons } from "@react-native-vector-icons/ionicons";
export default function MainTabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
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
        name="search"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={30} color={color} />
          ),
          tabBarLabel: "Search",
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart" size={30} color={color} />
          ),
          tabBarLabel: "Orders",
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
