import React from "react";
import {
  Text,
  View,
  TextInput,
  Pressable,
  TextStyle,
  ViewStyle,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUniwind } from "uniwind";

// --- 1. Themed Text ---
interface ThemedTextProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "muted";
  style?: TextStyle;
}

export const ThemedText = ({
  children,
  variant = "primary",
  style,
}: ThemedTextProps) => {
  const { theme } = useUniwind();

  // Define colors based on theme
  const colors = {
    primary: theme === "dark" ? "#ffffff" : "#111827",
    secondary: theme === "dark" ? "#9ca3af" : "#6b7280",
    muted: theme === "dark" ? "#6b7280" : "#9ca3af",
  };

  return <Text style={[{ color: colors[variant] }, style]}>{children}</Text>;
};

// --- 2. Themed View (Card/Container) ---
interface ThemedViewProps {
  children: React.ReactNode;
  variant?: "default" | "card" | "surface";
  style?: ViewStyle;
}

export const ThemedView = ({
  children,
  variant = "default",
  style,
}: ThemedViewProps) => {
  const { theme } = useUniwind();

  const backgrounds = {
    default: theme === "dark" ? "#000000" : "#ffffff",
    card: theme === "dark" ? "#1f2937" : "#ffffff",
    surface: theme === "dark" ? "#111827" : "#f9fafb",
  };

  const borders = {
    default: "transparent",
    card: theme === "dark" ? "#374151" : "#e5e7eb",
    surface: theme === "dark" ? "#1f2937" : "#f3f4f6",
  };

  return (
    <View
      style={[
        {
          backgroundColor: backgrounds[variant],
          borderColor: borders[variant],
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

// --- 3. Themed Input ---
export const ThemedInput = (props: any) => {
  const { theme } = useUniwind();

  return (
    <TextInput
      placeholderTextColor={theme === "dark" ? "#6b7280" : "#9ca3af"}
      style={[
        {
          height: 48,
          paddingHorizontal: 16,
          borderRadius: 12,
          borderWidth: 1,
          fontSize: 16,
          backgroundColor: theme === "dark" ? "#1f2937" : "#ffffff",
          borderColor: theme === "dark" ? "#374151" : "#e5e7eb",
          color: theme === "dark" ? "#ffffff" : "#111827",
        },
        props.style,
      ]}
      {...props}
    />
  );
};

// --- 4. Themed Button ---
export const ThemedButton = ({ children, onPress, style }: any) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          height: 50,
          borderRadius: 12,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#3b82f6", // Brand Primary
          shadowColor: "#3b82f6",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 8,
          elevation: 4,
        },
        style,
      ]}
    >
      <Text style={{ color: "#ffffff", fontWeight: "bold", fontSize: 16 }}>
        {children}
      </Text>
    </Pressable>
  );
};

export const ThemedSafeAreaView = ({ children, style }: any) => {
  const { theme } = useUniwind();

  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          backgroundColor: theme === "dark" ? "#000000" : "#ffffff",
        },
        style,
      ]}
    >
      {children}
    </SafeAreaView>
  );
};
