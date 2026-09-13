import {Tabs} from "expo-router";

export default function MainTabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="(profile)" />
    </Tabs>
  );
}