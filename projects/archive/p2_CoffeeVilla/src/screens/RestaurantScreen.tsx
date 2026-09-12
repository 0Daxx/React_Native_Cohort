
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// import { Colors } from "../../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";

import { RESTAURANTS } from "../data/restaurants";

interface RestaurantCardProp {
  name: string;
  image: string;
  veg: boolean;
  rating?: number;
  mood: string;
  location: string;
}

interface ExploreRestaurantCardProp {
  name: string;
  image: string;
  veg: boolean;
  rating: number;
  distance: number;
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
      style={({ pressed }) => ({
        width: "100%",
        paddingHorizontal: 15,
        opacity: pressed ? 0.7 : 1,
      })}
    >
      <View style={styles.restaurantCard}>
        <Image
          source={require("../../assets/images/dine.png")}
          style={styles.restaurantImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardName}>{name}</Text>
          <Text style={styles.cardMood}>{mood}</Text>
          <View style={styles.ratingRow}>
            <Text style={styles.ratingText}>{rating}</Text>
            <Ionicons name="star" size={14} color="#f4d03f" />
            <Text style={styles.locationTagText}> • {location}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

function ExploreRestaurantCard({
  name,
  image,
  veg,
  rating,
  distance,
  navigation,
}: ExploreRestaurantCardProp & { navigation: any }) {
  const { width, height } = useWindowDimensions();

  return (
    <Pressable
      onPress={() => {
        // Use .replace() instead of .push() to prevent infinite stacking
        navigation.push("RestaurantDetails", {
          name,
          image,
          veg,
          rating,
          distance,
        } ,
        //  options = { headerShown: false  }
        );
      }}
      style={styles.exploreCard}
    >
      <View style={styles.exploreCardContent}>
        <Image
          source={require("../../assets/images/dine.png")}
          style={{
            width: width * 0.4,
            height: height * 0.15,
            ...styles.exploreCardImage,
          }}
        />
        <Text style={styles.exploreCardName}>{name}</Text>
        <Text style={styles.exploreCardDistance}>{distance}</Text>
      </View>
    </Pressable>
  );
}

export default function RestaurantScreen({ route } : unknown ) {
  const { name, image, veg, rating, distance } = route.params;
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={{ flex: 1 }} >

      <ImageBackground
        source={require("../../assets/images/dine.png")}
        style={{
          width: width,
          height: height * 0.8,
          ...styles.imageBackground,
        }}
      >
        <Text style={styles.welcomeText}>Welcome to Coffee Villa!</Text>
        <Text style={styles.welcomeText}>{name}</Text>
        <View style={styles.headerRow}>
          <Ionicons
            name="chevron-back-outline"
            size={24}
            color="#e2e2e2"
            style={styles.iconButton}
          />
          <View style={styles.headerButtonGroup}>
            <Ionicons
              name="chevron-back-outline"
              size={24}
              color="#e2e2e2"
              style={styles.iconButton}
            />
            <Ionicons
              name="chevron-back-outline"
              size={24}
              color="#e2e2e2"
              style={styles.iconButton}
            />
          </View>
        </View>

        <Text style={styles.restaurantName}>Aapki apni Beithak</Text>
        <Text style={styles.locationText}>123 Main Street, City</Text>
        <Text style={styles.distanceText}>28.5 km • ₹300 for two</Text>

        <View style={styles.statusBadge}>
          <Ionicons
            name={veg ? "checkmark-outline" : "leaf-outline"}
            size={20}
            color="#1C9A3D"
            style={styles.statusIcon}
          />
          <Text style={styles.statusText}>Open Now | 10:00 AM - 10:00 PM</Text>
        </View>
      </ImageBackground>

      <Text style={styles.sectionTitle}>Explore Other Restaurants</Text>

      <FlatList
        data={RESTAURANTS}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({ item }) => (
          <ExploreRestaurantCard
            name={item.name} 
            image={item.image}
            veg={item.veg}
            rating={item.rating}
            distance={item.distance}
            navigation={navigation}
          />
        )}
      />
      
      </ScrollView>

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  imageBackground: {
    justifyContent: "flex-end",
    paddingBottom: 20,
    paddingHorizontal: 15,
  },
  welcomeText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 15,
  },
  iconButton: {
    backgroundColor: "#333333",
    padding: 8,
    borderRadius: 30,
  },
  headerButtonGroup: {
    flexDirection: "row",
    backgroundColor: "#333333",
    padding: 10,
    borderRadius: 5,
    gap: 20,
  },
  restaurantName: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  locationText: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 8,
  },
  distanceText: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 12,
  },
  statusBadge: {
    backgroundColor: "#16a34a",
    borderRadius: 20,
    padding: 10,
    flexDirection: "row",
    gap: 10,
    width: "55%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  statusIcon: {
    backgroundColor: "#333333",
    borderRadius: 30,
    padding: 5,
  },
  statusText: {
    color: "#fff",
    fontSize: 14,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 15,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  restaurantCard: {
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
  },
  restaurantImage: {
    width: 70,
    height: 70,
    borderRadius: 12,
  },
  exploreCardImage: {
    borderRadius: 12,
  },
  cardContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 8,
    flex: 1,
  },
  cardName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ffffff",
  },
  cardMood: {
    fontSize: 14,
    fontWeight: "500",
    color: "#d4a574",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#e8d5c4",
  },
  locationTagText: {
    fontSize: 13,
    color: "#b0b0b0",
  },
  exploreCard: {
    width: 200,
    marginRight: 15,
    paddingHorizontal: 15,
  },
  exploreCardContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 8,
  },
  exploreCardName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ffffff",
    marginTop: 8,
  },
  exploreCardDistance: {
    fontSize: 14,
    color: "#b0b0b0",
    marginTop: 4,
  },
  flatListContainer: {
    paddingHorizontal: 15,
    marginTop: 10,
  },
});
