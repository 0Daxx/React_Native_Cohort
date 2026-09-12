// @ts-nocheck
import { Button } from "@react-navigation/elements";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screenhehe </Text>
      {/* <Button screen={"Details"  }> Go to details </Button> */}
      {/* BEST WAY : use navigation  */}
      <Button onPress={() => navigation.navigate("Profile")}> Go to profile </Button>
      {/* <Button onPress={() => navigation.navigate("Detail"  )}> Go to details </Button> */}
      <Button onPress={() => navigation.navigate("Details" , {username:"chaicode"} )}> Go to details </Button>
      <Button onPress={() => navigation.reset()}> reset </Button>
      {/* <Button onPress={() => navigation.reset("Profile")}> Go to profile </Button> */}
    </View>
  );
}
