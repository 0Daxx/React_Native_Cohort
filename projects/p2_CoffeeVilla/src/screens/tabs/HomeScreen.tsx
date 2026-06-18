// @ts-nocheck
import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  FlatList,
  Switch,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";
import BarText from "../../components/BarText";
import HomeDishTabNavigator from "../../navigator/HomeDishTabNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileScreen from "../navigator/ProfileScreen";
// import { ScrollView } from "react-native-gesture-handler";

import SearchScreen from "../SearchScreen";

const FILTERS = [
  { icon1: "leaf-outline", icon2: "leaf", label: "Near & Fast", id: 1 },
  { icon1: "star-outline", icon2: "star", label: "Top Rated", id: 2 },
  { icon1: "bicycle-outline", icon2: "bicycle", label: "Fast Delivery", id: 3 },
  { icon1: "cash-outline", icon2: "cash", label: "Offers", id: 4 },
];

import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const [isVeg, setIsVeg] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigation = useNavigation();
  return (  
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        style={{ flex: 1, backgroundColor: "#fff" }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            // alignItems: "center",
            justifyContent: "space-between",
            padding: 16,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Ionicons
              name="location-outline"
              size={30}
              color={Colors.primary}
            />
            <View style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>Home</Text>
              <Ionicons
                name="chevron-down-outline"
                size={30}
                color={Colors.secondary}
              />
            </View>
            <Text style={{ color: "#9CA3AF" }}>Karol Bagh, New Delhi</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Pressable
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 8,
                borderRadius: 50,
                backgroundColor: "#3B82F6",
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                District App
              </Text>
            </Pressable>
            <Pressable>
              <Ionicons
                name="wallet-outline"
                size={24}
                color="#fff"
                backgroundColor="#333333"
                borderRadius={20}
              />
            </Pressable>
            <Pressable
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 8,
                borderRadius: 50,
                backgroundColor: "#3B82F6",
              }}
              // onPress={ () => <ProfileScreen /> }
            >
              <Text style={{ color: "#fff" }}>V</Text>
            </Pressable>
          </View>
        </View>

        {/* Search Bar Component */}
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
            backgroundColor: "#313131",
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
            <Ionicons
            name="search" size={24} color={Colors.primary} 
            />
          </Pressable>
          <TextInput
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#818181"
            placeholder="Search for coffee, cafes..."
            style={{ flex: 1 }}
          />
          <Pressable
            style={{ borderColor: "#818181", borderRadius: 20, padding: 8 }}
          >
            <Ionicons name="mic" size={24} color={Colors.primary} />
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
        </View>

        {/* Dinner Option */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 16, paddingLeft: 16 }}
        >
          <View
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginRight: 16,
            }}
          >
            <Image
              source={require("../../assets/images/dine.png")}
              style={{ width: 120, height: 120, borderRadius: 8 }}
            />
            <Text style={{ fontWeight: "bold" }}>Dinner</Text>
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginRight: 16,
            }}
          >
            <Image
              source={require("../../assets/images/dine.png")}
              style={{
                width: 120,
                height: 120,
                borderRadius: 8,
                isFocus: true,
                tintColor: "#1C9A3D",
              }}
            />
            <Text style={{ fontWeight: "bold" }}>Lunch</Text>
          </View>
        </ScrollView>
        {/* <HomeTabNavigator /> */}

        {/* Filters Section */}
        <View style={{ display: "flex", flexDirection: "row", gap: 8 , marginTop: 16, marginBottom: 16,  }}   >
          
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={FILTERS}
          keyExtractor={(filter) => filter.id.toString()}
          renderItem={({ item: filter }) => (
            <View
              key={filter.id}
              style={{
                alignItems: "center",
                backgroundColor: "#656565",
                padding: 8,
                borderRadius: 8,
                display: "flex",
                flexDirection: "row",
                gap: 4,
                paddingRight: 12,
                paddingLeft: 12,
                marginRight: 12,
                }}
            >
              <Ionicons name={filter.icon1} size={24} color={Colors.white} />
              <Text>{filter.label}</Text>
            </View>
          )}
        />

        <FlatList
          data={[
            { id: "1" },
            { id: "2" },
            { id: "3" },
            { id: "4" },
            { id: "5" },
            { id: "6" },
            { id: "7" },
            { id: "8" },
            { id: "9" },
            { id: "10" },
            { id: "11" },
            { id: "12" },
            { id: "13" },
          ]}
          renderItem={() => (
            <>
              {/* <Text style={{ color: "#ff0000" }}>Test</Text> */}
              <Image
                source={require("../../assets/images/discount.png")}
                style={{
                  width: 200,
                  height: 160,
                  marginTop: 16,
                  borderRadius: 8,
                  padding: 16,
                  marginRight: 16,
                  margin: 16,
                }}
              />
            </>
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={384 + 32}
          snapToAlignment="center"
          decelerationRate="fast"
          scrollEventThrottle={16}
          style={{
            flex: 1,
            marginTop: 16,
            paddingLeft: 16,
            backgroundColor: "#ab1717",
          }}
        />

        {/* <BarText text="ORDER YOUR MOOD DISHES" /> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  filterItem: {
    alignItems: "center",
    backgroundColor: "#656565",
    padding: 8,
    borderRadius: 8,
    flexDirection: "row",
    gap: 4,
    paddingRight: 12,
    paddingLeft: 12,
  },
});
