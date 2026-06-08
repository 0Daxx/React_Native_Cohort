import {
  KeyboardAvoidingView,
  Text,
  View,
  Platform,
  Pressable,
} from "react-native";
import { Appearance, useColorScheme } from "react-native";
import { useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

function MethodComponent({
  isDarkTheme,
  title,
  description,
  onPress,
  iconName,
}: {
  isDarkTheme: string;
  title: string;
  description: string;
  onPress: () => void;
  iconName: string;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        justifyContent: "flex-start",
        marginHorizontal: 15,
        marginVertical: 8,
        borderRadius: 20,
        backgroundColor: "#bcbcbc",
        paddingHorizontal: 10,
        borderColor: isDarkTheme === "dark" ? "#ffffff" : "#111111",
        borderWidth: 2,
      }}
    >
      <Ionicons
        name={iconName}
        size={30}
        color={isDarkTheme === "dark" ? "#ffffff" : "#111111"}
        style={{ marginLeft: 18, marginBottom: 4 }}
      />
      <View
        style={{
          flexDirection: "column",
          marginLeft: 18,
          marginBottom: 8,
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Text
          style={{
            color: isDarkTheme === "dark" ? "#ffffff" : "#111111",
            fontSize: 18,
            marginLeft: 18,
            marginBottom: 8,
            margin: 8,
            fontWeight: "bold",
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            color: isDarkTheme === "dark" ? "#ffffff" : "#111111",
            fontSize: 14,
            marginLeft: 18,
            marginBottom: 8,
          }}
        >
          {description}
        </Text>
      </View>
    </Pressable>
  );
}

export default function Forgot() {
  const [isDarkTheme, setIsDarkTheme] = useState<string>(
    Appearance.getColorScheme() || "default",
  );
  return (
    // <View style={styles.container}>
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
        <Text
          style={{
            color: isDarkTheme === "dark" ? "#ffffff" : "#000000",
            fontSize: 36,
            textAlign: "center",
          }}
        >
          Forgot Password
        </Text>
        <Text
          style={{
            color: isDarkTheme === "dark" ? "#ffffff" : "#000000",
            fontSize: 14,
            textAlign: "center",
            marginTop: 8,
          }}
        >
          Select which methods you'd like to use to reset your password
        </Text>

        <MethodComponent
          isDarkTheme={isDarkTheme}
          title="Email Address"
          description="Send via email address securely"
          onPress={() => console.log("Forgot Password Pressed")}
          iconName="mail"
        />
        <MethodComponent
          isDarkTheme={isDarkTheme}
          title="2 Factor Authentication"
          description="Send via 2FA securely "
          onPress={() => console.log("Forgot Password Pressed")}
          iconName="people"
        />
        <MethodComponent
          isDarkTheme={isDarkTheme}
          title="Google Authenticator"
          description="Send via authenticator app securely"
          onPress={() => console.log("Forgot Password Pressed")}
          iconName="lock-closed"
        />

        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            justifyContent: "center",
            marginHorizontal: 15,
            marginVertical: 8,
            borderRadius: 20,
            backgroundColor: "#07bc13",
            paddingHorizontal: 10,
            maxWidth: "100%",
            borderColor: isDarkTheme === "dark" ? "#ffffff" : "#111111",
            borderWidth: 2,
            height: 50,
          }}
        >
          <Text
            style={{
              color: "rgb(239, 239, 239)",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Reset Password
          </Text>
          <Ionicons
            // name="lock-closed"
            // name="people-circle"
            name="arrow-forward-outline"
            size={25}
            color={"rgb(236, 236, 236)"}
            style={{ marginLeft: 6, backgroundColor: "transparent" }}
          />
        </Pressable>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
  {
    /* </View> */
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
};
