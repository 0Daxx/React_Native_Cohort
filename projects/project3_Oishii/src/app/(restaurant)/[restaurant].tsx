import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useLocalSearchParams} from "expo-router";

const restaurant = () => {

  const { restaurantId } = useLocalSearchParams();
  // fetch restaurant data based on restaurantId . RESTAURANTS has many dishes  
  
  return (
    <View>
      <Text>{restaurantId}</Text>
    </View>
  )
}

export default restaurant

const styles = StyleSheet.create({})