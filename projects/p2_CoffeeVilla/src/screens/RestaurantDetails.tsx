// @ts-nocheck
import { View, Text, Pressable, useWindowDimensions, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Inside RestaurantDetails.tsx:
const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

const handleExploreOtherRestaurant = (nextRestaurantId: string) => {
  // .push() creates a new stack layer instead of jumping to the existing one
  navigation.push('RestaurantDetails', { restaurantId: nextRestaurantId });
};

export default function RestaurantDetails({ route }) {
  const { name, image, veg, rating, distance } = route.params;
  return (
    <View>
      <Text>{name}</Text>
      <Text>{image}</Text>
      <Text>{veg}</Text>
      <Text>{rating}</Text>
      <Text>{distance}</Text>
    </View>
  );
}