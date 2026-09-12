// @ts-nocheck
import React from "react";
import { View, Text } from "react-native";
export default function BarText({ text }: { text: string }) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "gray",
          minWidth: "40%",
        }}
      ></View>
      <Text> {text} </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "gray",
          minWidth: "40%",
        }}
      ></View>
    </View>
  );
}
