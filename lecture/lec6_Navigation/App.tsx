// @ts-nocheck
import * as React from 'react';
import { View , Text } from 'react-native';
import { createStaticNavigation, Link } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Button } from '@react-navigation/elements';

import DetailScreen from './src/screens/DetailScreen';
import HomeScreen from './src/screens/HomeScreen';
// import DetailsScreen from './src/screens/DetailScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const RootStack = createNativeStackNavigator({
  screens:{
    Home: HomeScreen,
    Details: { screen: DetailScreen , initialParams: { username: "default" } },
    Profile: ProfileScreen
  }
})

const MyTabs = createBottomTabNavigator({
  screens : {
    Home: HomeScreen,
    Details: { screen: DetailScreen , initialParams: { username: "default" } },
    Profile: ProfileScreen
  }
})

// const Navigation = createStaticNavigation(RootStack);
const Navigation = createStaticNavigation(MyTabs);



import DynamicStackNavigator from './src/navigator/stack/DynamicStackNavigator';
import DynamicTabNavigator from './src/navigator/tabs/DynamicTabNavigator';

export default function App() {
  return (
    // <Navigation />

      // <DynamicStackNavigator />
    <DynamicTabNavigator />
    );
}