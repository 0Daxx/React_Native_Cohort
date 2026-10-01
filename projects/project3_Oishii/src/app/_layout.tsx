import { Stack } from "expo-router";
import { useAuthStore } from "@/context/AuthContext";

export default function RootLayout() {
  const { isAuth  } = useAuthStore();
  return (
    <Stack>
      <Stack.Protected guard={!isAuth}>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Protected guard={isAuth}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack.Protected>
    </Stack>
  );
}

