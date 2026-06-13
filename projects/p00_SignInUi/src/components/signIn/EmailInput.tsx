import { Ionicons } from "@expo/vector-icons";
import { View, Text, TextInput } from "react-native";

export default function EmailInput({
  email,
  setEmail,
  isDarkTheme,
}: {
  email: string;
  setEmail: (email: string) => void;
  isDarkTheme: string;
}) {
  return (
    <View>
      <Text
        style={{
          fontSize: 14,
          color: isDarkTheme === "dark" ? "#ffffff" : "#111111",
          textAlign: "left",
          fontWeight: "bold",
          alignSelf: "flex-start",
          marginLeft: 18,
        }}
      >
        Email Address
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          backgroundColor: "#ffffff",
          justifyContent: "flex-start",
          marginHorizontal: 15,
          marginVertical: 8,
          borderRadius: 10,
          paddingHorizontal: 10,
        }}
      >
        <Ionicons name={"mail-outline"} size={30} color={"#0a0808ff"} />

        <TextInput
            placeholder="Enter Email"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={{
            height: 50,
            flex: 1,
            borderWidth: 0,
            minWidth: 0,
            borderRadius: 8,
            paddingHorizontal: 8,
            fontSize: 16,
            color: "#000000",
          }}
        />
      </View>
    </View>
  );
}
