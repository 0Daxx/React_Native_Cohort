import Ionicons from "@react-native-vector-icons/ionicons";
import { Tabs } from "expo-router";
import {ThemeProvider} from "@/theme/ThemeContext";
export default function RootLayout() {
  return (
    <ThemeProvider>
    <Tabs screenOptions={{ headerShown: false ,    }}  >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel:"Home",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="documents"
              size={24}
              color={focused ? "rgb(0, 122, 20)" : "gray"}
              />
            ),
          }}
          />
      <Tabs.Screen
        name="notes"
        options={{
          tabBarLabel:"Note",
          tabBarIcon: ({ focused }) => (
            <Ionicons
            name="document"
            size={24}
            color={focused ? "rgb(0, 122, 20)" : "gray"}
            />
          ),
        }}
      />
    </Tabs>
    </ThemeProvider>
  );
}
