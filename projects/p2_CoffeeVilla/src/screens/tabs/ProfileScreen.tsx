import React from "react";
import { View, Text, Image } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

// import HomeScreen from "../screens/HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../profile/LoginScreen";
import LogoutScreen from "../profile/LogoutScreen";
// import ProfileDrawer from "../navigator/ProfileDrawer";
const Drawer = createDrawerNavigator();
function ProfileDrawer() {
  return (
    <Drawer.Navigator
    //  initialRouteName="Home"
    //  screenOptions={{ headerShown: false }}
    >

      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Logout" component={LogoutScreen} />

    </Drawer.Navigator>
  );
}

export default function ProfileScreen() {
  return (
    // <MyProfile />
    // <NavigationContainer>
      <ProfileDrawer />
    // </NavigationContainer>
  );
}