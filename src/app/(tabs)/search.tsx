import { StyleSheet, Text, TextInput, View, Image, FlatList , Pressable} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@react-native-vector-icons/ionicons";

import { RestaurantProps } from "@/types/type";

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

  // MOCK Data
  const SEARCH_RESULTS = [
    {
      id: "1",
      name: "Apni Rasoi",
      time: "30-35 mins",
      offer: "50% OFF on select items",
      rating: "4.2",
      img: "https://images.unsplash.com/photo-1585937421612-70a008356f36?w=500&q=80",
    },
    {
      id: "2",
      name: "Hum Tum",
      time: "45-50 mins",
      offer: "Flat ₹150 OFF above ₹299",
      rating: "4.0",
      isAd: true,
      img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80",
    },
    {
      id: "3",
      name: "Punjabi Dhaba",
      time: "40-45 mins",
      offer: "30% OFF up to ₹75 above ₹99",
      rating: "4.0",
      isAd: true,
      img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&q=80",
    },
    {
      id: "4",
      name: "Shri Balaji Rasoi",
      time: "45-50 mins",
      offer: "50% OFF on select items",
      rating: "3.9",
      isAd: true,
      img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&q=80",
    },
    {
      id: "5",
      name: "Rajdharam",
      time: "25-30 mins",
      offer: "Free delivery",
      rating: "3.9",
      isAd: false,
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&q=80",
    },
  ];
  const FILTERED_RESULTS = SEARCH_RESULTS.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchText.toLowerCase())
  );
  // const restaurants = searchText.length > 0 ? FILTERED_RESULTS : SEARCH_RESULTS;

  // restaurant card
  const RestaurantCard = ({ restaurant }: { restaurant: RestaurantProps }) => {
    return (
      <Pressable
        onPress={() => router.push(`/(restaurant)/${restaurant.id}`)}
        style={{
          flex:1,
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
          <View style={{ flexDirection: "row", alignItems: "center"  , justifyContent: "flex-end" , }}>
            <Text>Rating: {restaurant.rating}</Text>
          </View>
        </View>
      </Pressable>
    );
  };

  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/* <Text>search</Text> */}

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
            <Ionicons
              name="close-circle"
              size={24}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              color="black"
              onPress={() => setSearchText("")}
            />
          )}
        </View>

        {/* Search Results  */}
        <FlatList 
          style={{ flex: 1 , width: "100%" , paddingHorizontal: 20 , }}
          data={searchText.length > 0 ? FILTERED_RESULTS : SEARCH_RESULTS}
          renderItem={({ item }) => <RestaurantCard restaurant={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default search;

const styles = StyleSheet.create({});
