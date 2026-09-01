import {
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import {ThemedText, ThemedView, ThemedInput, ThemedButton, ThemedSafeAreaView} from "../components/ThemedComponents";
import { Ionicons } from "@react-native-vector-icons/ionicons";

import { Link } from "expo-router";

export default function Index() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <ThemedSafeAreaView className="flex-1 bg-white dark:bg-black">
      <ThemedView className="flex-1 items-center justify-center p-6">
        <ThemedText variant="primary" className="text-2xl font-bold">
          Sign up
        </ThemedText>
        <ThemedText variant="secondary" className="text-center">
          Eonify has been launched in the app store , it has been released to the public for free and is available for download. You can now sign up and start using the app to manage your tasks and projects efficiently.
        </ThemedText>

      {/* Login with 3rd party buttons */}
      <ThemedView style={{ flexDirection: "row" }}>
        <ThemedView style={{ margin: 10 }}>
          <Ionicons name="logo-google" size={30} />
          <ThemedText>Google</ThemedText>
        </ThemedView>
        <ThemedView style={{ margin: 10 }}>
          <Ionicons name="logo-facebook" size={30} />
          <ThemedText> Facebook</ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={{ margin: 10, flexDirection: "row" }}>
        <ThemedView style={{ borderWidth: 1, borderColor: "gray" }}></ThemedView>
        {/* <ThemedView> <ThemedText> Or </ThemedText>  </ThemedView> */}
        <ThemedView style={{ borderWidth: 1, borderColor: "gray" }}></ThemedView>
      </ThemedView>

      {/* Fields  */}
      <KeyboardAvoidingView behavior="padding">
        <ThemedInput
          placeholder="Name"
          onChangeText={(text) => setName(text)}
        />
        <ThemedInput
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <ThemedView style={{ flexDirection: "row", alignItems: "center" }}>
          <ThemedInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={showPassword}
            onChangeText={(text) => setPassword(text)}
          />
          <Pressable
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons name={showPassword ? "eye-off" : "eye"} size={20} />
          </Pressable>
        </ThemedView>
        {/* <TextInput placeholder="Confirm Password" /> */}
      </KeyboardAvoidingView>
      <ThemedView
        style={{
          margin: 10,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Pressable
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          onPress={() => setIsChecked(!isChecked)}
          style={{
            backgroundColor: "#e9f5fd",
            padding: 10,
            borderRadius: 5,
            // width: 200,
            alignItems: "center",
          }}
        >
          {/* <ThemedText></ThemedText> */}
          {isChecked ? (
            <Ionicons name="checkmark" size={20} />
          ) : (
            <Ionicons name="square-outline" size={20} />
          )}
          {/* <Ionicons name="checkmark" size={20} /> */}
        </Pressable>
        <ThemedText> I agree to the Terms & Conditions </ThemedText>
      </ThemedView>

      <Pressable style={{ margin: 10 }}>
        <ThemedText>Create Account</ThemedText>
      </Pressable>

      <ThemedView style={{ margin: 10, flexDirection: "row" }}>
        <ThemedText>Already have an account? </ThemedText>
        <ThemedText style={{ color: "blue" }}>Login</ThemedText>
      </ThemedView>
    </ThemedView>
    {/* </ThemedView> */}
    </ThemedSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: 200,
    borderColor: "gray",
    // borderWidth: 1,
    backgroundColor: "#e9f5fd",
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
