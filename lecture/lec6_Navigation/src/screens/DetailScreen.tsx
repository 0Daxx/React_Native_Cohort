// @ts-nocheck
import { Link } from "@react-navigation/native";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";


export default function DetailScreen({route} : unknown ) {
  const navigation = useNavigation();
  const { username } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Text>Username: {username}</Text>
      {/* <Button screen={"Details"}> Go to details </Button> */}
      <Link screen={"Home"}>Go to Home</Link>

      <Button
        // title="Go back"
        onPress={() => {
          navigation.popToTop();
          // navigation.goBack();
        }} > Go back  </Button>
    </View>
  );
}

/*


*/
