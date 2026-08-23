import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Appearance,
  Image,
  Pressable,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function Confirmation() {
  const [isDarkTheme, setIsDarkTheme] = useState<string>(
    Appearance.getColorScheme() || "default",
  );
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
        gap: 15,
        // backgroundColor: isDarkTheme === "dark" ? "#111111" : "#ffffff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SafeAreaView
        style={{
          // flex: 1,
          gap:10,
          backgroundColor: isDarkTheme === "dark" ? "#111111" : "#ffffff",
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            // backgroundColor: isDarkTheme === "dark" ? "#4e4e4e" : "#ffffff",
            margin: 20,
            borderRadius: 10,
            padding: 20,
            maxWidth: 400,
            alignSelf: "center",
          }}
        >
          <Image
            source={require("@/assets/images/confirmation.png")}
            style={{
              alignSelf: "center",
              marginBottom: 20,
              minWidth: '100%',
              maxWidth: '100%',

              height: 200,
              width: 200,
              borderRadius: 20,
            }}
          />

          <Text
            style={{
              color: isDarkTheme === "dark" ? "#ffffff" : "#111111",
              fontSize: 24,
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 10,
            }}
          >
            We've sent you a confirmation email
          </Text>
          <Text
            style={{
              color: isDarkTheme === "dark" ? "#ffffff" : "#111111",
              fontSize: 16,
              textAlign: "center",
            }}
          >
            Please check your inbox and click the link to confirm your email
            address and complete the sign-up process.
          </Text>

            <Text style={{ color: isDarkTheme === "dark" ? "#ffffff" : "#111111", fontSize: 16, textAlign: "center" }}>
                Didnt receive the email? Check your spam folder or
            </Text>
            <Pressable 
            style={{marginTop: 10 , padding: 10 , backgroundColor: "#00d921" , borderRadius: 8 , alignItems: "center" , justifyContent: "center" , minWidth: '60%' , alignSelf: "center"}}
            onPress={() => console.log("Resend Email Pressed")}>
                <Text style={{color: "#ffff", fontWeight: "bold"}}>Resend Email</Text>
            </Pressable>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
