import { Stack } from "expo-router";

export default function RestaurantLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="[restaurant]" options={{ headerShown: false }} />
    </Stack>
  );
}
