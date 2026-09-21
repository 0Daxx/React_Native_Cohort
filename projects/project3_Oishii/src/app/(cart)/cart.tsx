import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useCart } from '@/hooks/useCart'
import { DishProp } from '@/types/type'
import { dishes } from '@/data/data'
import Ionicons from '@react-native-vector-icons/ionicons';
const cart = () => {
  const { cart, addItem, removeItem } = useCart();
  const cartDishes = cart.map((item) => item.dish);
  // const cartDishes = cart.map((item) => item.dish);
  console.log("cartDishes\n\n", cartDishes);

  const handleAddToCart = (id: string) => {
    const dish = dishes.find((d) => d.id === id);
    if (dish) {
      addItem(dish);
    }
    console.log(cart.length);
  };

  const handleRemoveFromCart = (id: string) => {
    removeItem(id);
  };
  const RenderDishItem = (dish: DishProp) => {
    const dishInCart = cart.find((item) => item.dish.id === dish.id);
    return (
      <View
        style={{
          padding: 10,
          borderWidth: 1,
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text>{dish.name}</Text>
          <Text>{dish.description}</Text>
          <Text>${dish.price.toFixed(2)}</Text>
          {dish.discount && <Text>Discount: {dish.discount}</Text>}
          {dish.isVegetarian !== undefined && (
            <Text>{dish.isVegetarian ? "Vegetarian" : "Non-Vegetarian"}</Text>
          )}
        </View>

        <View>
          <Image
            source={{ uri: dish.image }}
            style={{
              width: 100,
              height: 100,
              resizeMode: "cover",
              borderRadius: 10,
              backgroundColor: "rgb(0, 26, 155)",
            }}
          />
          <View
            style={{
              position: "absolute",
              bottom: 10,
              // right: 10,
              display: "flex",
              width: "90%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "white",
            }}
          >
            {dishInCart ? (
              <Pressable
                onPress={() => handleRemoveFromCart(dish.id)}
                hitSlop={30}
              >
                <Ionicons name="remove" size={20} color="rgb(26, 188, 115)" />
              </Pressable>
            ) : (
              <Pressable hitSlop={30}>
                <Text>Add </Text>
              </Pressable>
            )}

            <Text style={{ fontWeight: "bold", color: "rgb(0, 111, 61)" }}>
              {dishInCart?.quantity}
            </Text>
            <Pressable
              onPress={() => {
                handleAddToCart(dish.id);
              }}
              hitSlop={30}
            >
              <Ionicons name="add" size={20} color="rgb(26, 188, 115)" />
            </Pressable>
          </View>
        </View>
      </View>
    );
  };
  const dishListRef = React.useRef<FlatList<DishProp>>(null);
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>cart</Text>
      {/* <Text>cart {cart}</Text> */}
      <FlatList
        ref={dishListRef}
        // data={cartDishes}
        // data={cart.at(0)?.dish ? cart.map((item) => item) : []}
        renderItem={({ item }) => RenderDishItem(item)}
        // renderItem={({ item }) => RenderDishItem(item.dish )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  )
}

export default cart

const styles = StyleSheet.create({})