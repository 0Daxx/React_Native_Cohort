// @ts-nocheck
import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  FlatList,
  TextInput,
  ScrollView,
} from "react-native";
import { useColorScheme } from "react-native";
// import "./../../global.css"
import { SafeAreaView } from "react-native-safe-area-context";
import { BrandColors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

import SearchScreen from "../SearchScreen";

function RestaurantSearchList() {
  return (
    <ScrollView style={{ flex: 1, padding: 10 }}>
      {RESTAURANTS.map((restaurant) => (
        <RestaurantSearchCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </ScrollView>
  );
}

export default function DineScreen() {
    const [searchQuery, setSearchQuery] = React.useState("");
    return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
      // justifyContent: "center", alignItems: "center"
    >
      <ScrollView style={{ flex: 1 }}>
        {/* top */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            minWidth: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
            paddingVertical: 10,
            flexGrow: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Ionicons name="chevron-back-outline" size={30} color="black" />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                padding: 5,
                borderRadius: 5,
              }}
              onPress={() => {
                <Stack.Screen name="Search" component={SearchScreen} />;
                // Handle search icon press, e.g., navigate to restaurant search screen
              }}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Ionicons name="search-outline" size={24} color="black" />
            </Pressable>
            <Ionicons name="heart-outline" size={24} color="black" />
            <Ionicons name="arrow-redo-outline" size={24} color="black" />
            <Ionicons
              name="ellipsis-vertical-outline"
              size={24}
              color="black"
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "gray",
            minWidth: "80%",
            paddingHorizontal: 10,
          }}
        >
          <Ionicons name="search-outline" size={24} color="#565656" />
          <TextInput
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Restaurant, location or mood..."
            style={{ flex: 1, marginLeft: 10 }}
          />
          <Pressable
            hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
            onPress={() => setSearchQuery("")}
            style={{ marginRight: 30 }}
          >
            {searchQuery.length > 0 && (
              <Ionicons name="close-outline" size={28} color="#282828" />
            )}
          </Pressable>
          {/* <Ionicons name="close-outline" size={24} color="#282828" style={{ marginRight: 20 }} /> */}

          <Ionicons name="mic-outline" size={24} color="#282828" />
        </View>
        {/* Filter Options */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            paddingHorizontal: 20,
            marginTop: 20,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* <Pressable
            style={{
              flexDirection: "row",
              gap: 10,
              justifyContent: "space-around",
              padding: 10,
              borderRadius: 5,
              width: "20%",
              alignItems: "center",
              borderWidth: 1,
              // borderColor: "#000",
            }}
          >
            <Ionicons name="options-outline" size={24} color="black" />
            <Text> Filter </Text>
            <Ionicons name="chevron-down-outline" size={24} color="black" />
          </Pressable> */}

          {/* <Pressable
            style={{
              flexDirection: "row",
              gap: 10,
              justifyContent: "flex-start",
              padding: 10,
              // margin: 10,
              borderRadius: 15,
              width: "22%",
              backgroundColor: BrandColors.primary,
              color: BrandColors.white,
              alignItems: "center",
              // borderWidth: 1,
              // borderColor: "#000",
            }}
          >
            <Ionicons
              name="options-outline"
              size={24}
              color={BrandColors.white}
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: BrandColors.white, fontWeight: "bold" }}>
              {" "}
              Menu List
            </Text>
          </Pressable> */}
        </View>

        {/* LIST OF EXPLORE RESTAURANTS */}

        <SearchScreen />
        {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}

/* TODO 

1. search after clicking on search icon 

2. filter options after clicking on filter icon

3. Options on clicking on 3 dots icon on top right corner

4. List of restaurants with images and details like name, rating, cuisine, delivery time, etc. 

  Stars based on rating //TODO

*/
