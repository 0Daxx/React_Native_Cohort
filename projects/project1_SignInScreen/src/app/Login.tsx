import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import {
  ThemedText,
  ThemedView,
  ThemedInput,
  ThemedPressable,
  ThemedSafeAreaView,
} from "../components/ThemedComponents";
import { Uniwind } from "uniwind";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ThemedSafeAreaView className="flex-1 bg-white dark:bg-black">
      <ScrollView contentContainerClassName="p-6 gap-8">
        {/* Header */}
        <ThemedView className="items-center gap-2 mt-10">
          <ThemedText
            variant="primary"
            className="text-3xl font-bold"
            style={{ fontSize: 24 }}
          >
            Welcome Back
          </ThemedText>
          <ThemedText variant="secondary">Sign in to your account</ThemedText>
        </ThemedView>

        {/* Theme Toggle (Simple) */}
        <ThemedView className="self-end">
          <ThemedPressable
            onPress={() => {
              Uniwind.currentTheme === "dark"
                ? Uniwind.setTheme("light")
                : Uniwind.setTheme("dark");
            }}
            style={{ height: 40, width: 100, backgroundColor: "#333" }}
          >
            Dark
          </ThemedPressable>
        </ThemedView>

        {/* Form Card */}
        <ThemedView variant="card" className="p-6 rounded-2xl border gap-4">
          <ThemedText variant="primary" className="font-semibold">
            Email
          </ThemedText>
          <ThemedInput
            value={email}
            onChangeText={setEmail}
            placeholder="name@example.com"
          />
          

          <ThemedText variant="primary" className="font-semibold ">
            Password
          </ThemedText>
          <ThemedInput secureTextEntry placeholder="••••••••" />

          <ThemedPressable onPress={() => console.log("Login")}>
            Sign In
          </ThemedPressable>
        </ThemedView>
      </ScrollView>
    </ThemedSafeAreaView>
  );
}
