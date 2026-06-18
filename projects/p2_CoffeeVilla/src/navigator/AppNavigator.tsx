import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardScreen from '../screens/OnboardScreen';
import SearchScreen from '../screens/SearchScreen';
import RestaurantDetails from '../screens/RestaurantDetails';
// import HomeTabNavigator from './HomeTabNavigator';
import HomeDishTabNavigator from './HomeDishTabNavigator';
import HomeTabNavigator from './HomeTabNavigator';
// Define the param list for type safety
export type RootStackParamList = {
  Onboard: undefined;
  MainTabs: undefined;
  Search: undefined;
  RestaurantDetails: { restaurantId: string }; // Pass data to screen
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator 
    initialRouteName="MainTabs"
     >
      <Stack.Screen name="Onboard" component={OnboardScreen} />
      <Stack.Screen name="MainTabs" component={HomeTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
    </Stack.Navigator>
  );
}