import { Text, View, StyleSheet, Button, FlatList, } from "react-native";
import * as SecureStore from "expo-secure-store";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Index() {
  const [output, setOutput] = useState<string | null>(null);

  const renderButton = (title: string, onPress: () => void) => {
    return (
      <Button title={title} onPress={onPress} />
    )
  }
  // const [reference, setReference] = useState<FlatList<{ id: string; title: string; onPress: () => void }> | null>(null);

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

    <SafeAreaView style={styles.container}>
      <Text>{output}</Text>

      <FlatList data={[
        { id: "1", title: "Save Token", onPress: saveToken },
        { id: "2", title: "Get Token", onPress: getToken },
        { id: "3", title: "Delete Token", onPress: deleteToken },
        { id: "4", title: "Check Availability", onPress: checkAvailability },
        { id: "5", title: "Save Object", onPress: saveObject }
      ]} keyExtractor={(item) => item.id}
        // renderItem={({ item }) => renderButton(item.title, item.onPress)} 
        renderItem={({ item }) => renderButton(item.title, item.onPress)}
      // ref={reference}
      />

      <View style={{ marginTop: 20 , borderWidth: 1, borderColor: "black", padding: 10, width: "80%", alignItems: "center" }}>
        <Text>Output : {output}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
