import { Stack } from "expo-router";

export default function Layout() {
  const isLoggedIn = true; // Replace with your authentication logic
  return (
    <Stack>
      {/* guard = true means if the user is logged in , else false  */}
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen
          name="(tabs)"
          options={{ title: "Home", headerShown: false }}
        />
      </Stack.Protected>
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen
          name="(auth)"
          options={{ title: "Login", headerShown: false }}
        />
        <Stack.Screen name="(settingDrawer)/index"
         options={{ title: "User Profile" ,
          // headerShown: false
          
          }} />
      </Stack.Protected>
    </Stack>
  );
}
