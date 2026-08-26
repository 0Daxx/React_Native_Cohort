import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const Home = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <SafeAreaView
      style={{
        flex: 1,
        // backgroundColor: "white"
      }}
    >
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            padding: 20,
            //  alignItems: "center"
          }}
        >
          <Text>Email</Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "#ddd",
              borderRadius: 10,
              padding: 10,
            }}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />

          <Text>Password</Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "#ddd",
              borderRadius: 10,
              padding: 10,
            }}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Pressable
            onPress={() => {
              alert(`Email: ${email}, Password: ${password}`);
            }}
            style={{
              backgroundColor: "#8474fc",
              padding: 10,
              borderRadius: 10,
              margin: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white" }}>Sign in </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Home;
