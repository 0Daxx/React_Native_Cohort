import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";

const register = () => {
  const router = useRouter();
  return (
    <View>
      <Text>register</Text>
      {/* <Link style={{ margin:10 , padding: 10 , borderWidth: 1 , borderColor: 'black' }} href="/(auth)/login"  >Login</Link> */}
      <Pressable style={styles.link} onPress={() => router.replace("/(auth)/login")}>
        <Text>Login</Text>
      </Pressable>
      {/* <Pressable onPress={() => router.back()} > <Text>Login</Text> </Pressable> */}
    </View>
  );
};

export default register;

const styles = StyleSheet.create({
  link: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
  },
});
