// @ts-nocheck
import { View, Text, Image, Pressable, Switch } from "react-native";
export default function ThaliScreen() {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Image source={require("../../assets/images/thali.png")} style={{ width: 100, height: 100 }} />
      <Text>Thali </Text>
    </View>
  );
}