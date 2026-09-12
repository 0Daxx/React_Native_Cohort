import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable, Image, ScrollView } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from '@react-native-vector-icons/ionicons/static';
// data , components

export default function OnboardScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center"
      }}
    >
      <StatusBar style="auto" />
      <ScrollView
      // contentContainerStyle={{
      //   flexGrow: 1,
      //   // justifyContent: "center",
      //   // alignItems: "center",
      // }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
          }}
        >
          <Ionicons name="person-circle" size={100} color="black" />
        </View>

        {/* Welcome */}
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            marginTop: 20,
            textAlign: "center",
          }}
        >
          Welcome to Habitify
        </Text>
        <Text
          style={{
            fontSize: 26,
            marginTop: 10,
            textAlign: "center",

            color: "gray",
            fontWeight: "bold",

          }}
        >
          Tiny Changes remarkable results. 
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginTop: 10,
            textAlign: "center",
            color: "gray",
          }}
        >
          Track your habits and achieve your goals with Habitify.
        </Text>
        <Pressable
          style={{
            marginTop: 20,
            padding: 10,
            backgroundColor: "blue",
            borderRadius: 5,
            marginHorizontal: 20 , 
            alignItems: "center" , 
            justifyContent: "center" , 
            position: "absolute" ,
            right: 0 , 
          }}
        >
          <Text style={{ color: "white", fontSize: 16 }}>Sign in </Text>
        </Pressable>

        {/* Bottom  */}
        <Pressable
          style={{
            // position: "absolute",
            // bottom: 20,
            padding: 10,
            backgroundColor: "green",
            borderRadius: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
            gap: 12,
            marginHorizontal: 20
          }}
        >
          <Ionicons name="logo-google" size={20} color="white" />
          <Text style={{ color: "white", fontSize: 16 }}>Continue with Google</Text>
        </Pressable>

        <Pressable
          style={{
            // position: "absolute",
            // bottom: 20,
            padding: 10,
            backgroundColor: "green",
            borderRadius: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
            gap: 12,
            marginHorizontal: 20
          }}
        >
          <Ionicons name="mail" size={20} color="white" />
          <Text style={{ color: "white", fontSize: 16 }}>Continue with Email</Text>
        </Pressable>
        <Pressable
          style={{
            // position: "absolute",
            // bottom: 20,
            padding: 10,
            backgroundColor: "green",
            borderRadius: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
            gap: 12,
            marginHorizontal: 20
          }}
        >
          <Ionicons name="mail" size={20} color="white"  />
          <Text style={{ color: "white", fontSize: 16 }}>Continue as guest</Text>
        </Pressable>

        
        
      </ScrollView>
    </SafeAreaView>
  );
}
