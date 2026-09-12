import { Drawer } from "expo-router/drawer";

import { Ionicons } from "@react-native-vector-icons/ionicons";

export default function Layout() {
  return (
    <Drawer
     screenOptions={{ 
      // headerShown: false ,
      drawerIcon: ({  color }) => 
      {
        let iconName = "settings";

        <Ionicons name="settings" size={24} color={color} />      

      }
    }}
    >
      <Drawer.Screen name="index" options={{ title: "Settings" , drawerIcon: ({ color }) => <Ionicons name="settings" size={24} color={color} /> }} />
      <Drawer.Screen
        name="appearance"
        options={{ title: "Appearance", 
          // headerShown: false
          drawerIcon: ({ color }) => <Ionicons name="color-palette" size={24} color={color} />
        }}
      />
      <Drawer.Screen name="userprofile" options={{ title: "Profile" , drawerIcon: ({ color }) => <Ionicons name="person" size={24} color={color} /> }} />
    </Drawer>
  );
}
