// @ts-nocheck
// @ts-ignore: side-effect CSS import for web builds

import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";

import OnboardScreen from "./src/screens/OnboardScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import DineScreen from "./src/screens/DineScreen";
import EventScreen from "./src/screens/EventScreen";
import ProfileScreen from "./src/navigator/ProfileScreen";
import GroceryScreen from "./src/screens/GroceryScreen";

import { NavigationContainer } from "@react-navigation/native";

// screens

const Tab = createBottomTabNavigator();

// ALL


const TABS=[
  { name: "Home", component: HomeScreen, icon: "home-outline" },
  { name: "Dine", component: DineScreen, icon: "restaurant-outline" },
  { name: "Grocery", component: GroceryScreen, icon: "cart-outline" },
  { name: "Event", component: EventScreen, icon: "calendar" },
  { name: "Profiler", component: ProfileScreen, icon: "person" },
]
function Tabs() {
  
  return (
    <>
      <StatusBar style="auto" />
      <Tab.Navigator  
      // headershown={false}
       screenOptions={{ headerShown: false }} >

        {
          TABS.map((tab) => (
            <Tab.Screen
              key={tab.name}
              name={tab.name}
              component={tab.component}
              options={{
                tabBarIcon: () => (
                  <Ionicons name={tab.icon} size={24} color="black" />
                ),
              }}
            />
          ))
        }
      </Tab.Navigator>
    </>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
