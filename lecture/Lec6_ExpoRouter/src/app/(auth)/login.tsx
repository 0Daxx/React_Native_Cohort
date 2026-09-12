import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Pressable } from "react-native";
import { useRouter } from "expo-router";
const Login = () => {
  const router = useRouter();
  return (
    <View>
      <Text>Login</Text>
      <Pressable
        style={styles.link}
        onPress={() => router.replace("/(auth)/register")}
      >
        <Text>Login</Text>
      </Pressable>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  link: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
  },
});
