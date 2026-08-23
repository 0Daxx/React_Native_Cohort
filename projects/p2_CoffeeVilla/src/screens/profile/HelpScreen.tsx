import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";


export default function HelpScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Help Screen</Text>
      </View> 
    </SafeAreaView>
  );
}
