import {
  Pressable,
  StyleSheet,
  useColorScheme,
  useWindowDimensions,
  Text,View
} from "react-native";
import React, { useState } from "react";
// import EditScreenInfo from "@/components/EditScreenInfo";
// import { Text, View } from "@/components/Themed";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import * as ScreenOrientation from "expo-screen-orientation";

import {Appearance} from 'react-native';
import { PixelRatio } from "react-native";

const themes = {
  light: {
    backgroundColor: "#ffffff",
    textColor: "#111",
    subtext: "#666666",
    card: "#F5F5F5",
    accent: "#6C63FF",
  },
  dark: {
    backgroundColor: "#121212",
    textColor: "#fff",
    card: "#1E1E1E",
    subtext: "#AAAAAA",
    accent: "#9D97FF",
  },
};

export default function TabOneScreen() {
  // gives read only values , detects the safe area insets of the device and returns an object with top, bottom, left, right properties. 
  const insets = useSafeAreaInsets();

  const flatButtonStyle = StyleSheet.flatten([
    styles.button,
    styles.darkButton,
  ]);

  const { height, width, scale, fontScale } = useWindowDimensions();

  // screen orientation detection
  const isTablet = width >= height;
  // const isLandscape = width <= height;
  const isLandscape = width >= 768 && width > height;

  // async function lockOrientation() {
  //   await ScreenOrientation
  // }

  const lockLandscape = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE,
    );
  };
  const lockPortrait = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT,
    );
  };
  const increaseFont = async () => {
    // await
  };

  // const buttonStyle = StyleSheet.compose(
  //   styles.button,
  //   isDarkMode ? styles.darkButton : styles.lightButton,
  // );
  // Later styling will overwrite earlier styling

  const theme = useColorScheme();
  const [isDarkMode , setIsDarkMode] = useState<boolean>(theme === 'dark');
  return (
    <SafeAreaView style={{ flex: 1, elevation: 3  , backgroundColor: isDarkMode ? themes.dark.backgroundColor : themes.light.backgroundColor }}>
      <StatusBar style="dark" />
      <View
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={styles.title}>Tab One</Text>
        <View
          style={styles.separator}
          // lightColor="#eee"
          // darkColor="rgba(255,255,255,0.1)"
        />

        {/* @ts-ignore  */}
        

        <Text> Flat Style </Text>

        <Text>
          Current Height : {Math.round(height)} , Width : {Math.round(width)}
        </Text>
        <Pressable
          onPress={() => {
            // lockLandscape();
            isLandscape ? lockPortrait() : lockLandscape();
          }}
          style={{ borderRadius: 10, padding: 10, backgroundColor: "#333" }}
        >
          <Text style={{ color: "#85ffda", fontSize: 20, fontWeight: "bold" }}>
            {" "}
            Switch mode to {isLandscape ? "Portrait" : "Landscape"}{" "}
          </Text>
        </Pressable>
        {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}

        {/* useColorScheme */}
        {/* font scale and scale  */}
        <Text> Font Scale : {fontScale} </Text>
        <Text> Scale : {scale} </Text>

        <Text>Sample text that will be scalled </Text>
        

        <Text style={{ fontSize: 20 , fontWeight: 'bold' , color: isDarkMode ? themes.dark.textColor : themes.light.textColor  }} > current mode : { Appearance.getColorScheme() } </Text>
        <Pressable onPress={() => 
          {
            // setColorScheme(isDarkMode ? 'light' : 'dark');
            setIsDarkMode(!isDarkMode) 
          }
          
          } style={{ borderRadius: 10, padding: 10, backgroundColor: "#333" }} >
          <Text> Switch to { isDarkMode ? 'light' : 'dark' } </Text>
        </Pressable>


      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  button: {
    backgroundColor: "lightgray",
    padding: 10,
    margin: 10,
  },
  darkButton: {
    backgroundColor: "#333",
  },
  lightButton: {
    backgroundColor: "#fff",
    color: "#000000",
  },
});

/*
TimeStamp 
36 min : SafeAreaView 
1:09:30 -> StyleSheet compose 
1:18:00 -> stylesheet flatten 
1:24:30 -> useWindoeDimensions 


NOTES :  

Alternative to SafeAreaView will be to use insets from useSafeAreaInsets and then apply padding to the container view. 

 - it runs asynchronously and updates the insets values when the device orientation changes or when the safe area insets change. SO its slow 

WAY 3 :
 - initialWindowMetrics is used to provide the initial insets values when the app starts, which can help to avoid layout issues during the initial render.


Q WHY styles is outside the component ?
  - styles is defined outside the component because it is a static object that does not depend on any props or state. Defining it outside the component allows it to be created only once and reused across multiple renders, improving performance. If styles were defined inside the component, a new styles object would be created on every render, which could lead to unnecessary re-renders and performance issues.

Q whats scale and fontScale and where is it used ? 
  - 

component or library installed 
  - expo-status-bar : provides a component for managing the status bar in Expo apps, allowing you to control its appearance and behavior.
  - expo-screen-orientation : provides a set of APIs for managing screen orientation in Expo apps, allowing you to lock the orientation, get the current orientation, and listen for orientation changes.
  - 
 */
