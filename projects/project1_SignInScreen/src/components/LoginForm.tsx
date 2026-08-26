import { StyleSheet, Text, View } from "react-native";
import React from "react";

const LoginForm = () => {
  console.log("LoginForm component rendered");
  return (
    <View style={{ flex: 1 }}>
      <Text className="text-3xl font-bold text-foreground text-black dark:text-white " >LoginForm</Text>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({});
