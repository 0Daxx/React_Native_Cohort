import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@react-native-vector-icons/ionicons";

import { Link } from "expo-router";

export default function Index() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View style={styles.container}>
      <Text>Sign up</Text>
      <Text>
        Eonify has been launched in the app store , it has been released to the
        public for free
      </Text>

      {/* Login with 3rd party buttons */}
      <View style={{ flexDirection: "row" }}>
        <View style={{ margin: 10 }}>
          <Ionicons name="logo-google" size={30} />
          <Text>Google</Text>
        </View>
        <View style={{ margin: 10 }}>
          <Ionicons name="logo-facebook" size={30} />
          <Text> Facebook</Text>
        </View>
      </View>

      <View style={{ margin: 10, flexDirection: "row" }}>
        <View style={{ borderWidth: 1, borderColor: "gray" }}></View>
        {/* <View> <Text> Or </Text>  </View> */}
        <View style={{ borderWidth: 1, borderColor: "gray" }}></View>
      </View>

      {/* Fields  */}
      <KeyboardAvoidingView behavior="padding">
        <TextInput
          style={styles.input}
          // placeholderStyle={{ }}
          placeholder="Name"
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={showPassword}
            onChangeText={(text) => setPassword(text)}
          />
          <Pressable
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons name={showPassword ? "eye-off" : "eye"} size={20} />
          </Pressable>
        </View>
        {/* <TextInput placeholder="Confirm Password" /> */}
      </KeyboardAvoidingView>
      <View
        style={{
          margin: 10,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Pressable
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          onPress={() => setIsChecked(!isChecked)}
          style={{
            backgroundColor: "#e9f5fd",
            padding: 10,
            borderRadius: 5,
            // width: 200,
            alignItems: "center",
          }}
        >
          {/* <Text></Text> */}
          {isChecked ? (
            <Ionicons name="checkmark" size={20} />
          ) : (
            <Ionicons name="square-outline" size={20} />
          )}
          {/* <Ionicons name="checkmark" size={20} /> */}
        </Pressable>
        <Text> I agree to the Terms & Conditions </Text>
      </View>

      <Pressable style={{ margin: 10 }}>
        <Text>Create Account</Text>
      </Pressable>

      <View style={{ margin: 10, flexDirection: "row" }}>
        <Text>Already have an account? </Text>
        <Text style={{ color: "blue" }}>Login</Text>
      </View>
    </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: 200,
    borderColor: "gray",
    // borderWidth: 1,
    backgroundColor: "#e9f5fd",
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
