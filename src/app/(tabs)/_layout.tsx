import {Tabs} from "expo-router";

export default function MainTabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}