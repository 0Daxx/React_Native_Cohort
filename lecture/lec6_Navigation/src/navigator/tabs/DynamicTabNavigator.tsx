import * as React from "react";
import { TabRouter } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import HomeScreen from "../../screens/HomeScreen";
import DetailScreen from "../../screens/DetailScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import SearchScreen from "../../screens/SearchScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import {  }
import Ionicons  from "@expo/vector-icons";

// const Tab = createBottomTabNavigator({
//   screens: {
//     Home: HomeScreen,
//     Details: { screen: DetailScreen , initialParams: { username: "default" } },
//     Profile: ProfileScreen
//   }
// });

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Details" component={DetailScreen} initialParams={{ username: "default" }} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>) ;


  return (
    <Tab.Navigator
      // screenOptions={{
      //   headerShown: true,
      //   headerTitleAlign: "center",
      //   // title: "dashboard",
      //   // tabBarLabel: "dashboard but ",
      // }}
      initialRouteName="Profile"
      screenOptions={
        ({ route }) => ({

          headerShown: true,
          headerTitleAlign: "center",
          tabBarInactiveTintColor: "green",

          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap = "help";
            if (route.name === "Home") iconName = "flower-outline";
            else if (route.name === "Breathing") iconName = "leaf-outline";
            else if (route.name === "Sleep") iconName = "moon-outline";
            else if (route.name === "Analytics")
              iconName = "stats-chart-outline";
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })
        //   {
        //   headerShown: true,
        //   headerTitleAlign: "center",
        //   // title: "dashboard",
        //   // tabBarLabel: "dashboard but ",
        // }
      }
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "My home",
          headerStyle: { backgroundColor: "#de1414" },
          // at the bottom a different name then the title of the screen
          tabBarLabel: "Sweet home tab",
          // tabBarIcon: () => <Text>🏠</Text>,
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailScreen}
        options={{
          // tabBarIcon : () => <Text>📖</Text>,
          tabBarIcon: () => <Ionicons name="book" size={24} color="black" />,
        }}
      />
      {/* Details: { screen: DetailScreen , initialParams: { username: "default" } } */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <Ionicons name="person" size={24} color="black" />,
          tabBarBadge: 3,
        }}
      />
    </Tab.Navigator>
  );
}

export default function DynamicTabNavigator() {
  return (
    <NavigationContainer>
      <MyTab />
    </NavigationContainer>
  );
}
