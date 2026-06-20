import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardScreen from "../screens/OnboardScreen";
import SearchScreen from "../screens/SearchScreen";
import RestaurantScreen from "../screens/RestaurantScreen";
// import HomeTabNavigator from './HomeTabNavigator';
import HomeDishTabNavigator from "./HomeDishTabNavigator";
import HomeTabNavigator from "./HomeTabNavigator";
import { Ionicons } from "@expo/vector-icons";
import CartScreen from "../screens/CartScreen";
import { cartItem  , setCartItem } from "../context/CartProvider";
// }
// import {  }

// Define the param list for type safety
export type RootStackParamList = {
  Onboard: undefined;
  MainTabs: undefined;
  Search: undefined;
  RestaurantDetails: { restaurantId: string }; // Pass data to screen
  Cart: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="MainTabs">
      <Stack.Screen name="Onboard" component={OnboardScreen} />
      <Stack.Screen
        name="MainTabs"
        component={HomeTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Search" component={SearchScreen  }   />
      <Stack.Screen
        name="RestaurantDetails"
        component={RestaurantScreen}
        // options={{}}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        // options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
