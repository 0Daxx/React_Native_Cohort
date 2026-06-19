import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/tabs/HomeScreen';
import DineScreen from '../screens/tabs/DineScreen';
import ProfileScreen from '../screens/tabs/ProfileScreen';


const Tab = createBottomTabNavigator();
// const Tab = createBottomTabNavigator();
const TABS = [
  { name: "Home", component: HomeScreen, icon: "home-outline" },
  { name: "Dine", component: DineScreen, icon: "restaurant-outline" },
  // { name: "Grocery", component: GroceryScreen, icon: "cart-outline" },
  // { name: "Event", component: EventScreen, icon: "calendar" },
  { name: "Profile", component: ProfileScreen, icon: "person" },
];

// import { Ionicons } from "@react-native-vector-icons/ionicons/static";
import { Ionicons } from "@expo/vector-icons";

export default function HomeTabNavigator() {
  return (
    <Tab.Navigator
      // headershown={false}
      screenOptions={{ headerShown: false }}
    >
      {TABS.map((tab) => (
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
      ))}
    </Tab.Navigator>

    // <Tab.Navigator>
    //   <Tab.Screen name="Home" component={HomeScreen} />
    //   <Tab.Screen name="Dine" component={DineScreen} />
    //   <Tab.Screen name="Grocery" component={GroceryScreen} />
    //   <Tab.Screen name="Profile" component={ProfileScreen} />
    // </Tab.Navigator>
  );
}