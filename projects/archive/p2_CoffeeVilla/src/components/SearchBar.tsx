// @ts-nocheck
import React, { useState } from "react";
  
import { Ionicons } from "@expo/vector-icons";
import { View , TextInput , Pressable , StyleSheet , Switch  } from "react-native";
// import { View } from "react-native";
import { BrandColors } from "../constants/Colors";

export default function SearchBar({ searchQuery, setSearchQuery , isVeg , setIsVeg } : { searchQuery: string, setSearchQuery: (query: string) => void , isVeg: boolean, setIsVeg: (isVeg: boolean) => void }) {
<View
  style={{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 6,
    // margin:10,
    borderBottomWidth: 2,
    borderColor: "#1F2937",
    // borderBottomColor: "#1F2937"
    backgroundColor: "#df1111",
    borderColor: "#818181",
    borderRadius: 20,
  }}
>
  <Pressable
    style={{
      display: "flex",
      alignItems: "center",
      borderColor: "#818181",
      borderRadius: 20,
      padding: 8,
    }}
    onPress={() => {
      // Handle search icon press, e.g., navigate to restaurant search screen
      // navigation.navigate("Search");
      console.log("Search icon pressed");
    }}
  >
    <Ionicons name="search" size={24} color={BrandColors.primary} />
  </Pressable>
  <TextInput
    value={searchQuery}
    onChangeText={setSearchQuery}
    placeholderTextColor="#818181"
    placeholder="Search for coffee, cafes..."
    style={{ flex: 1 }}
  />
  <Pressable style={{ borderColor: "#818181", borderRadius: 20, padding: 8 }}>
    <Ionicons name="mic" size={24} color={BrandColors.primary} />
  </Pressable>
  <View style={{ display: "flex", alignItems: "center", gap: 8 }}>
    <Text style={{ color: "#3B82F6", fontWeight: "bold" }}>
      {isVeg ? "Veg" : "Non-Veg"}
    </Text>
    <Switch
      trackColor={{ false: "#767577", true: "#1C9A3D" }}
      value={isVeg}
      onValueChange={setIsVeg}
    />
  </View>
</View>;
}