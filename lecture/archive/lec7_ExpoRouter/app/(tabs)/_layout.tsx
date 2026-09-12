import { NativeTabs } from "expo-router/unstable-native-tabs";
import { Tabs } from "expo-router";

import { Ionicons } from "@react-native-vector-icons/ionicons";


// JS tabs 
export default function TabLayoutJS() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Home" , tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} /> }}  />
      <Tabs.Screen name="(settingDrawer)" options={{ title: "Settings" , tabBarIcon: ({ color }) => <Ionicons name="settings" size={24} color={color} /> }} />
      <Tabs.Screen name="explore" options={{ title: "Explore" , tabBarIcon: ({ color }) => <Ionicons name="search" size={24} color={color} /> }} />

    </Tabs>
  )

}

// export default function TabLayout() {
export function TabLayout() {
// Native Tabs is an experimental feature
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        <NativeTabs.Trigger.Icon sf="gear" md="settings" />
        <NativeTabs.Trigger.Label>Settings</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="explore">
        <NativeTabs.Trigger.Icon sf="magnifyingglass" md="search" />
        <NativeTabs.Trigger.Label>Explore</NativeTabs.Trigger.Label>

        <NativeTabs.Trigger.Badge>3</NativeTabs.Trigger.Badge>
      </NativeTabs.Trigger>

      {/* <NativeTabs.Screen name="index" options={{ title: "Home" }} />
      <NativeTabs.Screen name="settings" options={{ title: "Settings" }} />
      <NativeTabs.Screen name="explore" options={{ title: "Explore" }} /> */}

    </NativeTabs>
  );
}



// custom tabs 