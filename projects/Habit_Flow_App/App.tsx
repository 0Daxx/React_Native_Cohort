// import "./global.css";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./src/navigator/AppNavigator";
import HabitContextProvider from "./src/context/HabitContext";
export default function App() {
  return (
    <AppNavigator />
    // <HabitContextProvider>
    //   </HabitContextProvider>
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
