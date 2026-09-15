import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { useAuthStore } from "@/context/AuthContext";
const logout = () => {
  const router = useRouter();
  const { setIsAuth } = useAuthStore();

  const handleLogout = () => {
    setIsAuth(false);
    router.replace("/(auth)");
  };

  return (
    <View>
      <Text>logout</Text>
      <Pressable
        onPress={handleLogout}
        style={{
          padding: 10,
          backgroundColor: "red",
          borderRadius: 5,
          marginTop: 20,
        }}
      >
        <Text onPress={handleLogout}>Logout</Text>
      </Pressable>
    </View>
  );
};

export default logout;

const styles = StyleSheet.create({});
