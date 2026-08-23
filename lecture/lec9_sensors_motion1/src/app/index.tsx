import { Text, View, StyleSheet } from "react-native";
import {Accelerometer} from "expo-sensors";
import { useAccelerometer } from "@/hooks/use-accelerometer";
import TiltGame from "@/components/tilt-game";

// 1st check isAvailable , then Subscribe to get value 

export default function Index() {
  const {available , x , y , z } = useAccelerometer();
  // console.log(available,x,y,z);
  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>

      <TiltGame />
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
