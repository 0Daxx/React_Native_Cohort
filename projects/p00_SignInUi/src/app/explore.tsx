import { Image } from "expo-image";
import { SymbolView } from "expo-symbols";
import {
  Appearance,
  Platform,
  Pressable,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  View,
  // SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { Ionicons } from "@expo/vector-icons";

import { SafeAreaProvider } from "react-native-safe-area-context";
// import { View ,  } from 'react-native'
import React, { useState } from "react";

import EmailInput from "@/components/signIn/EmailInput";

import PasswordInput from "@/components/signIn/PasswordInput";

export default function TabTwoScreen() {
  const safeAreaInsets = useSafeAreaInsets();
  const insets = {
    ...safeAreaInsets,
    bottom: safeAreaInsets.bottom + BottomTabInset + Spacing.three,
  };
  const theme = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState<string>(
    Appearance.getColorScheme() || "default",
  );
  const [password, setPassword] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState<boolean>(false);
  const [email, setEmail] = useState<string>("");


  const handleSignUp = (email: string, password: string) => {
    // Implement your sign-up logic here, such as making an API call to your backend
    // console.log("Signing up with email:", email);
    // console.log("Signing up with password:", password);
    { password === confirmPassword ? console.log("Sign-up successful!") : console.log("Passwords do not match.") }
    // You can also add validation and error handling as needed
  };
  return (
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
          flex: 1,
          backgroundColor: isDarkTheme === "dark" ? "#111111" : "#ffffff",
        }}
      >
        <View
          style={{
            flex: 1,
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
            Sign Up for free
          </Text>
          <Text
            style={{
              color: isDarkTheme === "dark" ? "#dddddd" : "#333333",
              fontSize: 18,
              textAlign: "center",
              marginVertical: 12,
              maxWidth: MaxContentWidth,
              lineHeight: 24,
              fontWeight: "500",
              marginTop: 12,
            }}
          >
            Create an account to get all features and enjoy our app
          </Text>
        </View>

        {/* Email keyboard  */}

        <EmailInput
          email={email}
          setEmail={setEmail}
          isDarkTheme={isDarkTheme}
        />

        <View style={{ padding: 10 , flexDirection: 'row' , alignItems: 'center' , justifyContent: 'center' , gap: 6 , marginTop: 4,  marginBottom: 4  , borderRadius: 8 , backgroundColor: "#FEE5E6" ,  alignSelf: 'center' , borderColor: "#ff0000" , borderWidth: 1 , maxWidth: MaxContentWidth , paddingHorizontal: 12 }}>
          <Ionicons name='warning-outline' color='#ff0000' size={20} />
          <Text style={{ color: isDarkTheme === "dark" ? "#000000" : "#111111", fontSize: 12 }}>
            ERROR : Passwords do not match. 
          </Text>
        </View>

        {/* Password Keyboard */}

        <PasswordInput
          password={password}
          setPassword={setPassword}
          isPasswordVisible={isPasswordVisible}
          setIsPasswordVisible={setIsPasswordVisible}
          isDarkTheme={isDarkTheme}
          title="Password"
        />
        <PasswordInput
          password={confirmPassword}
          setPassword={setConfirmPassword}
          isPasswordVisible={isConfirmPasswordVisible}
          setIsPasswordVisible={setIsConfirmPasswordVisible}
          isDarkTheme={isDarkTheme}
          title="Password Confirmation"
        />

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
            handleSignUp(email, password);
            // console.log(email);
            // console.log(password);
          }}
        >
          <Text
            style={[
              styles.primary_text,
              { color: "#ffffff", fontWeight: "600" },
            ]}
          >
            Sign Up
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
            Already have an account ?
            <Text
              style={[
                { fontWeight: "bold", textDecorationLine: "underline" },
                styles.primary_text,
              ]}
            >
              Sign In
            </Text>
          </Text>

          {/* <Link href="/reset-password" style={[styles.primary_text, { textDecorationLine: "underline" , fontWeight: '600' , color: '#e500e9' , marginTop: 10 }]}>
                Reset Password
              </Link> */}
        </View>

        <View style={{ padding: 10  , flexDirection: 'row'} }>
          <Ionicons name='shield-checkmark-outline' size={20} color={isDarkTheme === "dark" ? "#ffffff" : "#111111"} style={{ marginLeft: 18, marginBottom: 4 }} />
          <Text style={{ color: isDarkTheme === "dark" ? "#ffffff" : "#111111", fontSize: 12, marginLeft: 18, marginBottom: 8 }}>
            Your data is safe with us. We don't share your information with anyone.
          </Text>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  container: {
    maxWidth: MaxContentWidth,
    flexGrow: 1,
  },
  primary_text: {
    fontSize: 16,
    textAlign: "center",
    color: `${Appearance.getColorScheme() === "dark" ? "#ffffff" : "#1111"}`,
  },
});
