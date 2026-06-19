// @ts-nocheck

import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  Image,
  Pressable,
  useWindowDimensions,
  ImageBackground,
} from "react-native";

import React from "react";
import { Dishes, DishProps } from "../data/dish";

export default function Dish({
  image,
  name,
  price,
  restaurantName,
  veg,
  rating,
  distance,
  id,
  health,
  calories,
  protein,
  // qty,
}: DishProps) {
  const { width, height } = useWindowDimensions();
  const [qty, setQty] = React.useState<number>(0);
  return (
    <View
      style={{
        width: width * 0.65,
        borderRadius: 20,
        overflow: "hidden",
        marginVertical: 10,
        backgroundColor: "#111",
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginRight: width * 0.05  
      }}
    >
      <ImageBackground
        source={{ uri: image }}
        style={{
          width: "100%",
          height: height * 0.28,
          justifyContent: "space-between",
        }}
        imageStyle={{ borderRadius: 20 }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 12,
          }}
        >
          <View
            style={{
              backgroundColor: veg ? "#2e7d32" : "#b71c1c",
              paddingHorizontal: 8,
              paddingVertical: 4,
              borderRadius: 999,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 12, fontWeight: "600" }}>
              {veg ? "Veg" : "Non-Veg"}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "rgba(0,0,0,0.6)",
              paddingHorizontal: 8,
              paddingVertical: 4,
              borderRadius: 999,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 12, fontWeight: "600" }}>
              ★ {rating}
            </Text>
          </View>
        </View>

        <View style={{ padding: 12, backgroundColor: "rgba(0,0,0,0.45)" }}>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "#fff" }}>
              {name}
            </Text>
            <Text style={{ color: "#ddd", marginTop: 4 }}>
              {restaurantName}
            </Text>
          </View>
          <View>
            {/* ADD button */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginTop: 10,
                justifyContent: "center",
                borderWidth: 1.5,
                borderColor: "#0f8002",
                borderRadius: 15,
              }}
            >
              {qty > 0 && (
                <Pressable
                  onPress={
                    () => setQty(qty - 1)
                    // console.log("Remove from cart")
                  }
                  // style={{ backgroundColor: "#b3ff00", padding: 6, borderRadius: 5, marginBottom: 4 }}
                >
                  <Ionicons
                    name="remove-outline"
                    size={30}
                    color="#1c9a3d"
                  />
                </Pressable>
              )}

              {qty === 0 ? (
                <Text style={{ color: "#fff" }}> Add </Text>
              ) : (
                <Text style={{ color: "#fff" }}> {qty} </Text>
              )}
              <Pressable
                onPress={() => setQty(qty + 1)}
                style={{
                  // backgroundColor: "#1c9a3d",
                  padding: 6,
                  borderRadius: 5,
                }}
                hitSlop={20}
              >
                <Ionicons name="add-outline" size={30} color="#1c9a3d" />
                {/* </Pressable> */}
              </Pressable>
            </View>
          </View>
        </View>
      </ImageBackground>

      <View style={{ padding: 12, gap: 8 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "#fff", fontWeight: "700" }}>₹{price}</Text>
          <Text style={{ color: "#bbb" }}>{distance} km away</Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "#bbb" }}>{calories} cal</Text>
          <Text style={{ color: "#bbb" }}>{protein}g protein</Text>
          <Text style={{ color: "#bbb" }}>Health: {health}</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Ionicons name="heart" size={20} color="#b3ff00" />
          {/* <Text style={{ color: "#fff" }}>#{id}</Text> */}
        </View>
      </View>
    </View>
  );
}
