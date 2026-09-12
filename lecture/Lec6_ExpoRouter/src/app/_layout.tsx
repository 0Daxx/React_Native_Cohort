import { Tabs, Stack } from "expo-router";

export default function RootLayout() {
  const isLoggedIn = true;
  // const isLoggedIn = false;
  return (
    <Stack>
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="(tabs)" />
      </Stack.Protected>
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="(auth)" />
      </Stack.Protected>
    </Stack>
  );
}
