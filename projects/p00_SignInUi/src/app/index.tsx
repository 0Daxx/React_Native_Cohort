import * as Device from "expo-device";
import {
  Platform,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Appearance,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";

// import Ionicons  from '@ionic/react';

// import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";
import { useState } from "react";
import { Icon, Link } from "expo-router";

// import { View, Text } from 'react-native'
// import React from 'react'

function IconComponent({
  isDarkTheme,
  name,
  size,
}: {
  isDarkTheme: string;
  name: string;
  size: number;
}) {
  return (
    <View>
      <Pressable
        onPress={() => console.log("facebook")}
        style={{ borderColor: "#f9f9f9ff", borderWidth: 3, borderRadius: 15 }}
      >
        <Ionicons
          name={name}
          size={size}
          color={isDarkTheme === "dark" ? "#ffffff" : "#000000db"}
          style={{ borderRadius: 10, padding: 5, margin: 5 }}
        />
      </Pressable>
      {/* <Text>IconComponent</Text> */}
    </View>
  );
}

import EmailInput  from "@/components/signIn/EmailInput";

import PasswordInput from "@/components/signIn/PasswordInput";

export default function HomeScreen() {
  const [isDarkTheme, setIsDarkTheme] = useState<string>(
    Appearance.getColorScheme() || "default",
  );
  const [password, setPassword] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  // const dark = Appearance.getColorScheme();
  return (
    // <ThemedView style={styles.container}>
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
        backgroundColor: isDarkTheme === "dark" ? "#111111" : "#ffffff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SafeAreaView
        style={{
          // flex: 1,
          backgroundColor: isDarkTheme === "dark" ? "#111111" : "#ffffff",
        }}
      >
        <View
          style={{
            // flex: 1,
            gap: 15,
            alignSelf: "center",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="leaf-outline"
            size={150} // → 150 dp tall/wide
            color="#39ff67ff" // → bright green
            style={{ marginVertical: 12 }} // layout adjustments
          />

          <Text
            style={{
              color: isDarkTheme === "dark" ? "#ffffff" : "#000000",
              fontSize: 36,
              textAlign: "center",
            }}
          >
            Sign In
          </Text>
          <Text
            style={{
              color: isDarkTheme === "dark" ? "#dddddd" : "#333333",
              fontSize: 18,
              textAlign: "center",
            }}
          >
            Lets experience the joy of Telecare AI
          </Text>
        </View>

        {/* Email keyboard  */}

        <EmailInput
          email={email}
          setEmail={setEmail}
          isDarkTheme={isDarkTheme}
        />

        {/* Password Keyboard */}

        <PasswordInput
          password={password}
          setPassword={setPassword}
          isPasswordVisible={isPasswordVisible}
          setIsPasswordVisible={setIsPasswordVisible}
          isDarkTheme={isDarkTheme}
          title="Password"
        />

        {/* social media sign in  */}
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            gap: 10,
            borderRadius: 10,
            // width: "80%",
            // height: 100,
            alignItems: "center",
            justifyContent: "center",

            // backgroundColor: "#ff0c0cff",
          }}
        >
          <IconComponent
            isDarkTheme={isDarkTheme}
            name="logo-apple"
            size={32}
          />
          <IconComponent
            isDarkTheme={isDarkTheme}
            name="logo-google"
            size={32}
          />
          <IconComponent
            isDarkTheme={isDarkTheme}
            name="logo-facebook"
            size={32}
          />
        </View>

        <Pressable
          style={{
            // width: "80%",
            backgroundColor: "#00d921",
            padding: 12,
            margin: 10,
            borderRadius: 12,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
          onPress={() => {
            console.log(email);
            console.log(password);
          }}
        >
          <Text
            style={[
              styles.primary_text,
              { color: "#ffffff", fontWeight: "600" },
            ]}
          >
            Sign in
          </Text>
          <Ionicons
            name={"arrow-forward-outline"}
            size={20}
            color="#ffffff"
            style={{ marginLeft: 6 }}
          />
        </Pressable>

        <View style={{ padding: 10 }}>
          <Text
            style={[
              {
                // textDecorationLine: "underline",
              },
              styles.primary_text,
            ]}
          >
            Dont have an account ?
            <Text
              style={[
                { fontWeight: "bold", textDecorationLine: "underline" },
                styles.primary_text,
              ]}
            >
              Sign Up
            </Text>
          </Text>

          {/* <Link href="/reset-password" style={[styles.primary_text, { textDecorationLine: "underline" , fontWeight: '600' , color: '#e500e9' , marginTop: 10 }]}>
            Reset Password
          </Link> */}
          <Text
            style={[
              styles.primary_text,
              {
                textDecorationLine: "underline",
                fontWeight: "600",
                color: "#04e900",
                marginTop: 10,
              },
            ]}
          >
            {" "}
            Forgot your password?{" "}
          </Text>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
    // </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    // color:'#ffffff'
  },
  primary_text: {
    fontSize: 16,
    textAlign: "center",
    color: `${Appearance.getColorScheme() === "dark" ? "#ffffff" : "#1111"}`,
  },
});

/*
lowest element not visible 




*/
