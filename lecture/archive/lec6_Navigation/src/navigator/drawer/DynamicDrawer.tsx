// @ts-nocheck
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../../screens/HomeScreen";
import DetailScreen from "../../screens/DetailScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import SearchScreen from "../../screens/SearchScreen";
import { NavigationContainer } from "@react-navigation/native";

const StaticDrawer = createDrawerNavigator({
  screens: {
    Home: HomeScreen,
    Details: DetailScreen,
    Profile: ProfileScreen,
    Search: SearchScreen,
  },
});

// Dynamic Drawer Navigator
const Drawer = createDrawerNavigator();

function MyDynamicDrawer() {
  // const drawerStatus = false;
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Details" component={DetailScreen} initialParams={{ username: "default" }} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Search" component={SearchScreen} />
    </Drawer.Navigator>
  );
  // if (drawerStatus) {
  // }
}

export default function DynamicDrawer() {
  return (
    <NavigationContainer>
      <MyDynamicDrawer />
    </NavigationContainer>
  );
  // return <StaticDrawer />;
}
