// @ts-nocheck
import React from "react";
import { useColorScheme } from "react-native";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Pressable,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";


export default function OnboardScreen() {
  const theme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = React.useState<string>("");
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Image
        source={require("../../assets/images/dine.png")}
        style={{ width: 200, height: 200 }}
      />
      <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 20 }}>
        Welcome to Coffee Villa!
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: "gray",
          marginTop: 10,
          textAlign: "center",
          paddingHorizontal: 20,
        }}
      >
        Discover the best coffee in town and enjoy a cozy atmosphere at Coffee
        Villa.
      </Text>

      <Text> Login in or sign up </Text>
      <KeyboardAvoidingView
        behavior="padding"
        style={{ width: "100%", alignItems: "center" }}
      >
        {/* Indian flag  */}
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            gap: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name="flag" size={24} color="black" />
          {/* <Ionicons name="home" size={24} color="black" /> */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 15,
            }}
          >
            <Ionicons name="person-add-outline" size={24} color="black" />
            <TextInput
              keyboardType="numer-pad"
              placeholderColor="gray"
              placeholder="Enter Phone number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              style={{
                padding: 10,
                width: 200,
                borderColor: "gray",
              }}
            />
          </View>
        </View>
        <Pressable
          style={{ marginTop: 20 }}
          onPress={() =>
            console.log("Continue with phone number:", phoneNumber)
          }
        >
          <Text
          className="text-lg font-bold  "
            style={{
              backgroundColor: "black",
              color: "white",
              padding: 10,
              borderRadius: 5,
              marginTop: 20,
              textAlign: "center",
              
            }}
          >
            Continue
          </Text>
        </Pressable>
      </KeyboardAvoidingView>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "gray",
            minWidth: "40%",
          }}
        ></View>
        <Text> or </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "gray",
            minWidth: "40%",
          }}
        ></View>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" , gap: 20 , }}>
        <Pressable
          style={{ marginTop: 20 , borderWidth: 1 , borderColor: "gray" , padding: 5, borderRadius: 10}}
          onPress={() => console.log("Continue with Google")}
        >
          <Ionicons name="logo-google" size={24} color="black" />
        </Pressable>
        <Pressable
          style={{ marginTop: 20 , borderWidth: 1 , borderColor: "gray" , padding: 5, borderRadius: 10}}
          onPress={() => console.log("Continue with Google")}
        >
          <Ionicons name="ellipsis-horizontal" size={24} color="black" />
          {/* <Ionicons name="logo-google" size={24} color="black" /> */}
        </Pressable>
      </View>

      <Text>
        {" "}
        By continuing, you agree to our Terms of Service and Privacy Policy{" "}
      </Text>
      <Pressable
        onPress={() => console.log("Terms of Service and Privacy Policy")}
      >
        <Text style={{ color: "blue", textDecorationLine: "underline" }}>
          Terms of Service and Privacy Policy
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}
