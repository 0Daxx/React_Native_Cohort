import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@react-native-vector-icons/ionicons";

import { RestaurantProps } from "@/types/type";
import { restaurantData } from "@/data/data";
import { useRouter } from "expo-router";
const search = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState<string>("");

  const handleSearch = (text: string) => {
    setSearchText(text);
    // You can add your search logic here, e.g., filtering a list based on the search text
  };

  useEffect(() => {
    handleSearch(searchText);
  }, [searchText]);

  const FILTERED_RESULTS = restaurantData.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  // restaurant card
  const RestaurantCard = ({ restaurant }: { restaurant: RestaurantProps }) => {
    return (
      <Pressable
        onPress={() =>{
          router.push(`/(restaurant)/restaurantId=${restaurant.id}`)
          // router.push(`/(restaurant)/${restaurant.id}`)
          console.log("restaurant.id", restaurant.id)
        } 
      }
        style={{
          flex: 1,
          // width: "90%",
          marginBottom: 20,
          padding: 10,
          borderWidth: 1,
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          backgroundColor: "#fff",
        }}
      >
        <Image
          source={{ uri: "@/assets/images/onboard1.png" }}
          style={{
            width: "20%",
            height: 150,
            borderRadius: 10,
            backgroundColor: "#ccc",
          }}
        />
        <View
          style={{
            marginLeft: 10,
            flex: 1,
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {restaurant.name}
          </Text>
          <Text>{restaurant.deliveryTime}</Text>
          <Text>{restaurant.offer}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Text>Rating: {restaurant.rating}</Text>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/* Search Bar  */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 10,
            marginBottom: 20,
          }}
        >
          <TextInput
            placeholder="Search Restaurants, Cuisines, Dishes"
            value={searchText}
            onChangeText={setSearchText}
            style={{
              width: "80%",
              height: 40,
              // borderWidth: 1,
              borderRadius: 10,
              padding: 10,
            }}
          />
          {searchText.length > 0 && (
            <Pressable
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              onPress={() => setSearchText("")}
            >
              <Ionicons name="close-circle" size={24} color="black" />
            </Pressable>
          )}
        </View>

        {/* Search Results  */}
        <FlatList
          style={{ flex: 1, width: "100%", paddingHorizontal: 20 }}
          data={searchText.length > 0 ? FILTERED_RESULTS : restaurantData}
          renderItem={({ item }) => <RestaurantCard restaurant={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default search;

const styles = StyleSheet.create({});
