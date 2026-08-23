import { View, StyleSheet } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>hehe src/app/index.tsx to edit this screen.</Text> */}
      {/* <Text>Welcome to React Native Cohort!</Text> */}
      <View>
        <Text>Welcome to React Native Cohort!</Text>
      </View>
    </SafeAreaView>

    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
