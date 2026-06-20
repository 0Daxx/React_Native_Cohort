// @ts-nocheck
// @ts-ignore: side-effect CSS import for web builds

import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";

import OnboardScreen from "./src/screens/OnboardScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/tabs/HomeScreen";
import DineScreen from "./src/screens/DineScreen";
import EventScreen from "./src/screens/tabs/EventScreen";
// import ProfileScreen from "../src/navigator/ProfileScreen";
import GroceryScreen from "./src/screens/tabs/GroceryScreen";
import ProfileScreen from "./src/screens/tabs/ProfileScreen";

import RestaurantDetails from "./src/screens/RestaurantScreen";


import CartProvider from "./src/context/CartProvider";
import {
  NavigationContainer,
  createNativeStackNavigator,
} from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import AppNavigator from "./src/navigator/AppNavigator";

// screens

// Root Stack Navigator
export type RootStackParamList = {
  Onboard: undefined;
  Home: undefined;
  RestaurantDetails: {
    name: string;
    image: string;
    veg: boolean;
    rating: number;
    distance: string;
    rating: number;
    distance: string;
  };
  Profile: undefined;
  Search: undefined;
};
const RootStack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (

    <CartProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </CartProvider>
  );
// }
//     <NavigationContainer>
//       <AppNavigator />
//     </NavigationContainer>
//   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
