import { Text, View, Pressable, ScrollView, Image, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function ProfileMain() {
  const [showPersonalisedRatingEnabled, setShowPersonalisedRatingEnabled] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <ScrollView style={{ flex: 1 }}>
        <View>
          <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
            Profile Main Screen
          </Text>
        </View>

        {/* personal Info card */}
        <View>
          <Image />
          <View>
            <Text>Name: John Doe</Text>
            <Text>Email: 2QGnS@example.com</Text>

            {/* Edit profile Button  */}
            <Pressable>
              <Ionicons name="edit" size={18} color="#0b8600" />
            </Pressable>
          </View>
        </View>

        {/* Renew membership card */}
        <Pressable
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 20,
          }}
        >
          <Ionicons name="sparkles" size={24} color="#0b8600" />
          <Text>Get membership </Text>
          <Ionicons name="arrow-forward" size={24} color="#0b8600" />
        </Pressable>

        {/* zomato money and coupon  */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 20,
          }}
        >
          <Pressable style={{}}>
            <Ionicons name="wallet-outline" size={24} color="#0b8600" />
            <Text>Zomato Money </Text>
            <Text>$100</Text>
          </Pressable>

          <Pressable style={{}}>
            <Ionicons name="cash-outline" size={24} color="#0b8600" />
            <Text>Your coupons</Text>
          </Pressable>
        </View>

        {/* preference */}
        <Pressable >
          <Ionicons />
          <Text> Show personalized ratings  </Text>
          <Switch trackColor={{ false: "#767577", true: "#81b0ff" }} 
            thumbColor= {showPersonalisedRatingEnabled ? "#81b0ff" : "#f5dd4b"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setShowPersonalisedRatingEnabled(!showPersonalisedRatingEnabled)}
            value={showPersonalisedRatingEnabled}
          />
        </Pressable>

        <Pressable>
          <Ionicons />
          <Text>Appearance  </Text>
          <Text>Light</Text>
          <Ionicons />
        </Pressable>

        <Pressable>
          <Ionicons />
          <Text>Language  </Text>
          <Text>English</Text>
          <Ionicons />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
