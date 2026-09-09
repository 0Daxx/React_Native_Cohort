import Ionicons from "@react-native-vector-icons/ionicons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="documents"
              size={24}
              color={focused ? "blue" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notes"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="document"
              size={24}
              color={focused ? "blue" : "gray"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
