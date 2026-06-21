import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/tabs/HomeScreen";
import DineScreen from "../screens/tabs/DineScreen";
import ProfileScreen from "../screens/tabs/ProfileScreen";
import OrderScreen from "../screens/tabs/OrderScreen";
import SearchScreen from "../screens/SearchScreen";

const Tab = createBottomTabNavigator();

const TABS = [
  { name: "Home", component: HomeScreen, icon: "home-outline" },

  { name: "Search", component: SearchScreen, icon: "search-outline" },

  { name: "Order", component: OrderScreen, icon: "cart" },
  { name: "My Profile", component: ProfileScreen, icon: "person" },
];

import { useContext } from "react";
import CartScreen from "../screens/CartScreen";

import OrderNavigator from "./OrderNavigator";
import { Ionicons } from "@expo/vector-icons";

import { CartContext } from "../context/CartProvider";

export default function HomeTabNavigator() {
  const { cart } = React.useContext(CartContext);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, animation: "fade" }  }>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name={"home-outline"} size={24} color="black" />
          ),
          animation: 'shift' ,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name={"search-outline"} size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderNavigator}
        options={{
          headerShown: false,
          tabBarIcon: () => <Ionicons name={"cart"} size={24} color="black" />,
          tabBarBadge: cartItemCount ? cartItemCount : undefined,
        }}
      />
      <Tab.Screen
        name="My Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name={"person"} size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
