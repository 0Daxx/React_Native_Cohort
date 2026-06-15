// @ts-nocheck
import * as React from 'react';
import { View , Text } from 'react-native';
import { createStaticNavigation, Link } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return (
    <Navigation />
  );
}