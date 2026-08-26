import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Index() {
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <Text numberOfLines={1}>
        Edit src/app/index.tsx to edit this screen. lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      </Text>
      <Image
        source={require("@/assets/images/tabIcons/explore.png")}
        style={{ width: 100, height: 100, blurRadius: 10 }}
      />
      <Image
        source={{
          uri: "https://chaicode.com/assets/hitesh-suraj-dark-CKHA9jfT.webp",
        }}
        // source={ { uri: "https://placehold.co/600x400"}}
        style={{
          width: 300,
          height: 300,
          borderRadius: 10,
          borderWidth: 2,
          blurRadius: 10,
          // resizeMode: "contain",
          // backgroundColor: "red",
        }}
        // width={100}
        // height={100}
      />

      <SafeAreaView>
        <TextInput
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          // placeholderTextColor="blue"
          style={{
            width: 300,
            height: 50,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "gray",
          }}
        />
      </SafeAreaView>
      <Pressable
        hitSlop={{ bottom: 20 }}
        onLongPress={() => alert("Long pressed")}
        onPress={() => alert(`Hello ${name}`)}
        style={
          ({ pressed }) => ({
            backgroundColor: pressed ? "lightgray" : "gray",
            padding: 10,
            borderRadius: 10,
          })
          // { backgroundColor: "lightgray", padding: 10, borderRadius: 10 },
        }
      >
        {({ pressed }) =>
          pressed ? <Text>"pressing..."</Text> : <Text>Press </Text>
        }
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
