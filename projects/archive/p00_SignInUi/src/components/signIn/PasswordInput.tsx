import { Ionicons } from "@expo/vector-icons";
import { View, Text, TextInput, Pressable } from "react-native";

export default function PasswordInput({ password, setPassword, isPasswordVisible, setIsPasswordVisible, isDarkTheme , title }: { password: string; setPassword: (password: string) => void; isPasswordVisible: boolean; setIsPasswordVisible: (visible: boolean) => void; isDarkTheme: string; title: string }) {
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
        {title}
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
        <Ionicons name={"lock-closed-outline"} size={30} color={"#0a0808ff"} />
        <TextInput
          placeholder="Enter Password"
          keyboardType="default"
          value={password}
          secureTextEntry={!isPasswordVisible}
          onChangeText={(text) => setPassword(text)}
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
        <Pressable
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          style={{
            padding: 8,
            borderRadius: 8,
            marginLeft: 8,
          }}
        >
          {isPasswordVisible ? (
            <Ionicons name="eye-outline" size={26} color={"#0a0808ff"} />
          ) : (
            <Ionicons name="eye-off-outline" size={26} color={"#0a0808ff"} />
          )}
        </Pressable>
      </View>
    </View>
  );
}