// @ts-nocheck
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  useWindowDimensions,
  ScrollView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

// Order Material Top Tab Navigator
const OrderList = () => {};

// dish order component
function OrderDish() {
  return (
    <View
      style={{
        width: "90%",
        height: "auto",
        borderRadius: 16,
        backgroundColor: "#ffffff",
        padding: 16,
        justifyContent: "space-between",
        marginVertical: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
      }}
    >
      {/* Edit Button */}
      <Pressable style={{ flexDirection: "row", alignItems: "center", gap: 4, alignSelf: "flex-end", marginBottom: 8 }}>
        <Text style={{ fontSize: 16, color: "#0b8600", fontWeight: "600" }}>Edit</Text>
        <Ionicons name="create" size={18} color="#0b8600" />
      </Pressable>

      {/* Dish Name */}
      <Text style={{ fontWeight: "bold", textAlign: "left", fontSize: 16, color: "#1a1a1a", marginBottom: 8 }}>
        Love Special Chowmein
      </Text>

      {/* Price and Quantity */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
        <Text style={{ fontWeight: "700", fontSize: 18, color: "#0b8600" }}>$100</Text>
        <View
          style={{
            flexDirection: "row",
            width: "35%",
            borderWidth: 1.5,
            borderColor: "#0b8600",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 10,
            paddingVertical: 6,
            paddingHorizontal: 10,
            backgroundColor: "#f5fff5",
          }}
        >
          <Pressable hitSlop={8}>
            <Ionicons name="remove" size={20} color="#0b8600" />
          </Pressable>
          <Text style={{ fontWeight: "bold", textAlign: "center", color: "#0b8600" }}>1</Text>
          <Pressable hitSlop={8}>
            <Ionicons name="add" size={20} color="#0b8600" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default function OrderScreen() {
  const { width, height } = useWindowDimensions();
  const [orderList, setOrderList] = useState([]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
      }}
      // style={{ justifyContent: "center", alignItems: "center"}}
    >
      <View style={{ width: "90%", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 20  , textAlign: "left"}} >Order </Text>
      </View>

      <OrderDish />
    </SafeAreaView>
  );
}


/*


*/