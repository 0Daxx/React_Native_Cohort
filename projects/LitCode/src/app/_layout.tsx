import {useAuthStore} from "@/state/auth-store";
import { Stack , useRouter , useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import {StatusBar} from "expo-status-bar";
import { useEffect } from "react";
import {ActivityIndicator, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import 'react-native-url-polyfill/auto'

function RootNavigator(){
  const session = useAuthStore((state)=>state.session)
  const isLoading = useAuthStore((state)=> state.isLoading)
  const initialize = useAuthStore((state)=> state.initialize)
  const segments = useSegments()
  const router = useRouter()

  useEffect(()=>{
    const cleanup = initialize()
    return cleanup
  },[initialize])
  },[session,isLoading,segments,router])
 
   useEffect(() => {
    if (isLoading) return

    const inAuthGroup = segments[0] === '(auth)'
    const inAuthCallback = segments[0] === 'auth'

    if (!session && !inAuthGroup && !inAuthCallback) {
      router.replace('/(auth)/sign-in' as never)
    } else if (session && inAuthGroup) {
      router.replace('/' as never)
    }

    SplashScreen.hideAsync()
  }, [session, isLoading, segments, router])

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0c',
        }}
      >
        <ActivityIndicator color="#bdf06e" />
      </View>
    )
  }
  
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#0a0a0c' },
        animation: 'fade',
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="auth/callback" />
    </Stack>
  )
                            
      
}

export default function RootLayout() {
  
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <RootNavigator />
    </SafeAreaProvider>
  )
}
