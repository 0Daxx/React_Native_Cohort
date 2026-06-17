// @ts-nocheck
import React from "react";
import { useColorScheme, View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import { useColorScheme } from "react-native";

const Tab = createMaterialTopTabNavigator();


import ThaliScreen from "../homeTabs/ThaliScreen";
// import DosaScreen from "../homeTabs/DosaScreen";
// import PizzaScreen from "../homeTabs/PizzaScreen";
// import BurgerScreen from "../homeTabs/BurgerScreen";
// import CoffeeScreen from "../homeTabs/CoffeeScreen";


const DISHES = [
  { name: "Thaliii", component: ThaliScreen  , icon: require("../../assets/images/dine.png") },
  { name: "Dosa", component: ThaliScreen, icon: require("../../assets/images/dine.png") },
  { name: "Pizza", component: ThaliScreen, icon: require("../../assets/images/dine.png") },
  { name: "Burger", component: ThaliScreen, icon: require("../../assets/images/dine.png") },
  { name: "Coffee", component: ThaliScreen, icon: require("../../assets/images/dine.png") },
]

export default function HomeTabNavigator() {
  // const theme = useColorScheme();
  // const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
      <Tab.Screen
        name="Thali"
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../../assets/images/thali.png")}
              // source={require("../ ../assets/images/dine.png")}
              style={{ width: 60, height: 60 }}
            /> 
          ),
        }}
        component={ThaliScreen}
      />

      {
        DISHES.map((dish) => (
          <Tab.Screen
            key={dish.name}
            name={dish.name}
            options={{
              tabBarIcon: () => (
                <Image
                  source={dish.icon}
                  style={{ width: 60, height: 60 }}
                />
              ),
            }}
            component={dish.component}
          />
        ))
      }
      {/* <Tab.Screen name="Dosa" component={DosaScreen} />
      <Tab.Screen name="Pizza" component={PizzaScreen} />
      <Tab.Screen name="Burger" component={BurgerScreen} />
      <Tab.Screen name="Coffee" component={CoffeeScreen} /> */}
      {/* <Tab.Screen name="Profile" component={ProfileScreen} /> */}
    </Tab.Navigator>
  );
}
