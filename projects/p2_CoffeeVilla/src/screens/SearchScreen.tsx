// @ts-nocheck

import React from "react";
import { Ionicons } from "@expo/vector-icons";

import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  ScrollView,
  ImageBackground,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { useWindowDimensions } from "react-native";

interface RestaurantProps {
  image: string;
  name: string;
  mood: string;
  location: string;
  rating: number;
  id: number;
}

import { getRandomValues } from "expo-crypto";
import { v4 as uuidv4 } from "uuid";
import { Background } from "@react-navigation/elements";

const randomId = () => {
  // Math.floor(Math.random() * 1000000);
  const random = new Uint8Array(16);
  getRandomValues(random);

  return uuidv4({
    random,
  });
};

const RESTAURANTS: RestaurantProps[] = [
  {
    image: "https://source.unsplash.com/400x300/?cafe",
    name: "Cafe 1",
    mood: "Mood 1",
    location: "Location 1",
    rating: 4.5,
    id: randomId(),
  },
  {
    image: "https://source.unsplash.com/400x300/?cafe",
    name: "Cafe 1",
    mood: "Mood 1",
    location: "Location 1",
    rating: 4.5,
    id: randomId(),
  },
  {
    image: "https://source.unsplash.com/400x300/?cafe",
    name: "Cafe 1",
    mood: "Mood 1",
    location: "Location 1",
    rating: 4.5,
    id: randomId(),
  },
  {
    image: "https://source.unsplash.com/400x300/?cafe",
    name: "Cafe 1",
    mood: "Mood 1",
    location: "Location 1",
    rating: 4.5,
    id: randomId(),
  },
  {
    image: "https://source.unsplash.com/400x300/?cafe",
    name: "bole to vadapao",
    mood: "Mood 1",
    location: "Location 1",
    rating: 4.5,
    id: randomId(),
  },
  {
    image: "https://source.unsplash.com/400x300/?cafe",
    name: "Cafe 1",
    mood: "Mood 1",
    location: "Location 1",
    rating: 4.5,
    id: randomId(),
  },
  {
    image: "https://source.unsplash.com/400x300/?cafe",
    name: "aalo chef",
    mood: "Mood 1",
    location: "Location 1",
    rating: 4.5,
    id: randomId(),
  },
  {
    image: "https://source.unsplash.com/400x300/?cafe",
    name: "bhindi rasoi",
    mood: "Mood 1",
    location: "Location 1",
    rating: 4.5,
    id: randomId(),
  },
  {
    image: "https://source.unsplash.com/400x300/?cafe",
    name: "chowmein saga",
    mood: "Mood 1",
    location: "Location 1",
    rating: 4.5,
    id: randomId(),
  },
  {
    image: "https://source.unsplash.com/400x300/?cafe",
    name: "Cafe 1",
    mood: "Mood 1",
    location: "Location 1",
    rating: 4.5,
    id: randomId(),
  },
  {
    image: "https://source.unsplash.com/400x300/?cafe",
    name: "Apni rasoi",
    mood: "Mood 1",
    location: "Location 1",
    rating: 4.5,
    id: randomId(),
  },
];

interface RestaurantCardProp {
  name: string;
  image: string;
  veg: boolean;
  rating: number;
  mood: string;
  // title: string;
  location: string;
  // distance: number;
}

function RestaurantCard({
  name,
  image,
  veg,
  rating = 4.5,
  mood,
  location,
}: RestaurantCardProp) {
  return (
    <Pressable
      onPress={() => {}}
      style={({ pressed }) => ({ width: "100%", paddingHorizontal: 15, opacity: pressed ? 0.7 : 1   })}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 15,
          padding: 15,
          borderRadius: 12,
          backgroundColor: "#2d2d2d",
          marginBottom: 12,
          minWidth: "85%",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          elevation: 5,
          borderLeftWidth: 4,
          borderLeftColor: "#d4a574",
        }}
      >
        <Image
          source={require("../../assets/images/dine.png")}
          style={{ width: 70, height: 70, borderRadius: 12 }}
        />
        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 8,
            flex: 1,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "600", color: "#ffffff" }}>
            {name}
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "500", color: "#d4a574" }}>
            {mood}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Text style={{ fontSize: 14, fontWeight: "500", color: "#e8d5c4" }}>
              {rating}
            </Text>
            <Ionicons name="star" size={14} color="#f4d03f" />
            <Text style={{ fontSize: 13, color: "#b0b0b0" }}>
              {" "}
              • {location}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

function ExploreRestaurants({}: Omit<RestaurantCardProp, "mood" | "location">) {
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 8,
        flex: 1,
      }}
    >
      <Image source={require("../../assets/images/dine.png")} />

      <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
        <Text style={{ fontSize: 18, fontWeight: "600", color: "#ffffff" }}>
          {name}
        </Text>
      </View>
      <Text style={{ fontSize: 14, color: "#b0b0b0" }}> {distance} </Text>
      {/* {restaurants.map((r) => (
        <RestaurantCard key={r.id} {...r} />
      ))} */}
    </View>
  );
}

export default function SearchScreen() {
  const { width, height } = useWindowDimensions();
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "#1F2937"
      }}
    >
      {/* Search bar */}
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

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
          minWidth: "100%",
          backgroundColor: "#1F2937",
        }}
      >
        {/* restaurant names after query search */}

        {RESTAURANTS.filter((restaurant) => {
          return (
            restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            restaurant.location
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) ||
            restaurant.mood.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }).map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            name={restaurant.name}
            image={restaurant.image}
            veg={restaurant.veg}
            rating={restaurant.rating}
            mood={restaurant.mood}
            location={restaurant.location}
            // /restaurant={restaurant}
          />
        ))}

        {/* RestaurantScreen */}
        <ScrollView
          style={{
            flex: 1,
            // backgroundColor: "#164b96",
            minHeight: "80%",
            minWidth: "100%",
            // flex: 1,
            // flexDirection: "column",
          }}
          contentContainerStyle={{
            paddingBottom: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ImageBackground
            source={require("../../assets/images/dine.png")}
            style={{
              width: width,
              height: height * 0.8,
              // backgroundColor: "#164b96",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>
              Welcome to Coffee Villa!
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "80%",
              }}
            >
              <View>
                <Ionicons
                  name="chevron-back-outline"
                  size={24}
                  color="#e2e2e2"
                  style={{ backgroundColor: "#333333" }}
                />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  backgroundColor: "#333333",
                  padding: 10,
                  borderRadius: 5,
                  gap: 20,
                  // alignItems: "center" 00
                }}
              >
                <Ionicons
                  name="chevron-back-outline"
                  size={24}
                  color="#e2e2e2"
                  style={{
                    backgroundColor: "#333333",
                    marginRight: 10,
                    borderRadius: 30,
                  }}
                />
                <Ionicons
                  name="chevron-back-outline"
                  size={24}
                  color="#e2e2e2"
                  style={{ backgroundColor: "#333333" }}
                />
              </View>

              {/* name */}
            </View>
            <Text
              style={{
                color: "#fff",
                fontSize: 30,
                fontWeight: "bold",
                marginTop: 10,
              }}
            >
              Aapki apni Beithak
            </Text>
            {/* location */}
            <Text style={{ color: "#fff", fontSize: 18, marginTop: 10 }}>
              123 Main Street, City
            </Text>
            {/* distance and rate */}
            <Text style={{ color: "#fff", fontSize: 16, marginTop: 10 }}>
              28.5 km . 300 for two
            </Text>

            {/* status */}
            <View
              style={{
                backgroundColor: "#16a34a",
                borderRadius: 5,
                marginTop: 10,
                alignItems: "right",
                width: "45%",
                justifyContent: "center",
                borderRadius: 20,
                padding: 10,
                flexDirection: "row",
                gap: 10,
              }}
            >
              <Ionicons
                name={true ? "checkmark-outline" : "leaf-outline"}
                size={20}
                color="#1C9A3D"
                // backgroundColor="#333333"
                style={{
                  backgroundColor: "#333333",
                  borderRadius: 30,
                  padding: 5,
                }}
              />
              <Text style={{ color: "#fff", fontSize: 14 }}>
                Open Now | 10:00 AM - 10:00 PM
              </Text>
            </View>
          </ImageBackground>
          {/* <Image */}
          {/* /> */}
          <Text
            style={{
              color: "#fff",
              fontSize: 24,
              fontWeight: "bold",
              textAlign: "left",
            }}
          >
            {" "}
            Explore Other Restaurants{" "}
          </Text>
          {/* OTHER restaurants */}
        </ScrollView>
      </View>
    </View>
  );
}
