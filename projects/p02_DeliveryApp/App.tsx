import * as React from "react";
import { Text, View } from "react-native";
import {
  createStaticNavigation,
  useNavigation,
} from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import OrderScreen from "./src/screens/OrderScreen";
import SearchScreen from "./src/screens/SearchScreen";

const MyTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: "Home",
        tabBarLabelStyle: {
          fontSize: 16,
          fontFamily: "Georgia",
          fontWeight: 300,
        },
        tabBarIcon: () => <Ionicons name="home" size={24} color="black" />,
      },
    },
    Profile: {
      screen: ProfileScreen,
      options: {
        title: "Profile",
        tabBarIcon: () => <Ionicons name="person" size={24} color="black" />,
      },
    },
    Order: {
      screen: OrderScreen,
      options: {
        title: "Order",
        tabBarIcon: () => <Ionicons name="cart" size={24} color="black" />,
        tabBarBadge: 5,
      },
    },
    Search: {
      screen: SearchScreen,
      options: {
        title: "Search",
        tabBarIcon: () => <Ionicons name="search" size={24} color="black" />,
      },
    },
  },
  screenOptions: {
    // tabBarActiveBackgroundColor: "light2blue",
    headerTintColor: "#014edc",
    tabBarActiveTintColor: "blue",
    // tabBarInactiveTintColor: "gray",
    tabBarStyle: {
      // backgroundColor: "#0dff00",
    },
  },
});

const Navigation = createStaticNavigation(MyTabs);

export default function App() {
  return <Navigation />;
}
