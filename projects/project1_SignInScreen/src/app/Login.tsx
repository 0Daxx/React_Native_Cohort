import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  // SafeAreaView,
  ScrollView,
  StatusBar,
  Alert,
} from "react-native";
import { Uniwind, useUniwind } from "uniwind";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@react-native-vector-icons/ionicons";

export default function LoginScreen() {
  const { theme } = useUniwind();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-black">
      <StatusBar
        barStyle={theme === "dark" ? "light-content" : "dark-content"}
      />

      <ScrollView contentContainerClassName="flex-grow px-6 py-10 gap-8 dark:bg-black ">
        {/* Header Section */}
        <View className="items-center gap-3 mt-8">
          {/* Logo Circle: Blue in both modes, but shadow adapts */}
          <View className="w-20 h-20 rounded-full bg-blue-500 items-center justify-center shadow-lg">
            <Text className="text-white text-3xl font-bold">A</Text>
          </View>

          <Text className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
            Welcome Back
          </Text>

          <Text className="text-gray-500 dark:text-gray-400 text-center max-w-[80%]">
            Enter your credentials to access your account
          </Text>
        </View>

        {/* Theme Toggle */}
        <View className="self-end">
          <Pressable
            onPress={() =>
              Uniwind.setTheme(theme === "light" ? "dark" : "light")
            }
            className="flex-row items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full"
          >
            <Text className="text-lg">{theme === "dark" ? "🌙" : "☀️"}</Text>
            <Text className="text-gray-600 dark:text-gray-300 text-sm font-medium uppercase">
              {theme}
            </Text>
          </Pressable>
        </View>

        {/* Login Form Card */}
        <View className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 gap-5 shadow-sm">
          {/* Email Input */}
          <View className="gap-2">
            <Text className="text-sm font-semibold text-gray-900 dark:text-white ml-1">
              Email Address
            </Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="name@example.com"
              // Placeholder color doesn't support dark: prefix, so we use a variable or inline style
              placeholderTextColor={theme === "dark" ? "#9ca3af" : "#6b7280"}
              autoCapitalize="none"
              keyboardType="email-address"
              className="h-12 px-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-base focus:border-blue-500"
            />
          </View>

          {/* Password Input */}
          <View className="gap-2">
            <Text className="text-sm font-semibold text-gray-900 dark:text-white ml-1">
              Password
            </Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholder="••••••••"
              placeholderTextColor={theme === "dark" ? "#9ca3af" : "#6b7280"}
              className="h-12 px-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-base focus:border-blue-500"
            />
            <Pressable
                          onPress={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-10"
                          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                        >
                          {!showPassword ? (
                            <Ionicons name="eye-off" size={24} color="gray" />
                          ) : (
                            <Ionicons name="eye" size={24} color="gray" />
                          )}
                        </Pressable>
          </View>

          {/* Forgot Password Link */}
          <Pressable className="self-end -mt-2">
            <Text className="text-blue-500 text-sm font-medium">
              Forgot Password?
            </Text>
          </Pressable>

          {/* Sign In Button */}
          <Pressable
            onPress={() => {
              setShowPassword(!showPassword);
              setPassword("");
              setEmail("");
              // setConfirmPassword("");
              Alert.alert("Sign In", "Signed in successfully!");
              console.log("Sign In button pressed");
            }}
            className="h-12 bg-blue-500 rounded-xl items-center justify-center shadow-lg active:bg-blue-600"
          >
            <Text className="text-white font-bold text-lg tracking-wide">
              Sign In
            </Text>
          </Pressable>
        </View>

        {/* Footer */}
        <View className="flex-row justify-center gap-2 mt-4">
          <Text className="text-gray-500 dark:text-gray-400">
            Don't have an account?
          </Text>
          <Pressable>
            <Text className="text-blue-500 font-bold">Sign Up</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
