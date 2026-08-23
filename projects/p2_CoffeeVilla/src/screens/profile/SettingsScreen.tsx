import {Text , View , Pressable} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PreferenceScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Preference Screen</Text>
      </View>
    </SafeAreaView>
  );
}
