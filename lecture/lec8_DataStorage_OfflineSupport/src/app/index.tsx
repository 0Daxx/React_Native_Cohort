import { Text, View, StyleSheet } from "react-native";
import * as SecureStore from "expo-secure-store";
import { useState } from "react";
export default function Index() {
  const [output, setOutput] = useState<string | null>(null);

  const saveToken = async () => {
    try {
      await SecureStore.setItemAsync("token", "ablkihbvv")
      setOutput("Token Saved")
    } catch (error) {
      console.log(error)
      console.error();
    }
  }

  const getToken = async () => {
    const value = await SecureStore.getItemAsync("token")
    setOutput(value);
  }

  const deleteToken = async () => {
    await SecureStore.deleteItemAsync("token")
    setOutput("token deleted")

  }
  const checkAvailability = async () => {
    const available = await SecureStore.isAvailableAsync()
    setOutput(
      available ? "SecureStore available"
        : "Not available"
    )
  }
  const saveObject = async () => {
    const user = {
      name: "Code snipper",
      role: "Admin"
    }

    await SecureStore.setItemAsync("user", JSON.stringify(user))
    setOutput("object saved ")
  }
  return (

    <View style={styles.container}>
      <Text>{output}</Text>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
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
