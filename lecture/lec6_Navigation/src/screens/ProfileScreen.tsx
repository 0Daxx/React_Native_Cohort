// @ts-nocheck
import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";


export default function ProfileScreen() {
  const navigation = useNavigation();
    return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile Screen  </Text>
        <Button onPress={() => navigation.navigate("Home")}>Go Home</Button>
        {/* <Button onPress={() => navigation.popTo("Home")}>Pop to Home</Button> */}


        {/*  */}
        <Button onPress={() => navigation.popToTop("Home")}>Pop to Home</Button>
    </View>
  );
}
